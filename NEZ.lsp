;;; =================================================================
;;; NEZ.lsp - AutoLISP Script for AutoCAD
;;; แสดงพิกัด N, E, EL พร้อมลูกศรชี้ตำแหน่ง
;;; พัฒนาโดย: JINGJAI SURVEY (jingjaisurvey.xyz)
;;; =================================================================
;;; 
;;; วิธีใช้งาน:
;;; 1. โหลดไฟล์: (load "NEZ.lsp") หรือ APPLOAD
;;; 2. พิมพ์คำสั่ง: NEZ
;;; 3. คลิกจุดที่ต้องการแสดงพิกัด
;;; 4. เลือกทิศทางของ landing line
;;; 
;;; =================================================================

(defun c:NEZ (/ pt txt-ht arr-len landing-len offset-dist
              leader-pt txt-pt n-val e-val el-val coord-txt
              landing-dir ang landing-end txt-base grp-list)
  
  ;; --- ตั้งค่าเริ่มต้น ---
  (setq txt-ht 0.25            ; ความสูงข้อความ
        arr-len 1.0            ; ความยาวลูกศร
        landing-len 2.0        ; ความยาว landing line
        offset-dist 0.15)      ; ระยะห่างข้อความจาก landing line
  
  ;; --- เลือกจุด ---
  (setq pt (getpoint "\nเลือกตำแหน่งที่ต้องการแสดงพิกัด: "))
  
  (if pt
    (progn
      ;; --- เลือกทิศทาง ---
      (initget "Left Right")
      (setq landing-dir (getkword "\nเลือกทิศทาง landing line [Left/Right] <Right>: "))
      (if (null landing-dir) (setq landing-dir "Right"))
      
      ;; --- คำนวณพิกัด ---
      (setq n-val (cadr pt)
            e-val (car pt)
            el-val (if (caddr pt) (caddr pt) 0.0))
      
      ;; --- กำหนดมุมและตำแหน่ง ---
      (if (eq landing-dir "Left")
        (progn
          (setq ang (* pi 0.75))  ; 135 องศา
          (setq leader-pt (polar pt ang arr-len))
          (setq landing-end (polar leader-pt pi landing-len))
          (setq txt-base (list (- (car landing-end) offset-dist)
                               (+ (cadr landing-end) offset-dist)
                               0.0)))
        (progn
          (setq ang (* pi 0.25))  ; 45 องศา
          (setq leader-pt (polar pt ang arr-len))
          (setq landing-end (polar leader-pt 0 landing-len))
          (setq txt-base (list (+ (car landing-end) offset-dist)
                               (+ (cadr landing-end) offset-dist)
                               0.0))))
      
      ;; --- สร้างข้อความพิกัด ---
      (setq coord-txt (strcat "N: " (rtos n-val 2 3) "\\P"
                              "E: " (rtos e-val 2 3) "\\P"
                              "EL: " (rtos el-val 2 3)))
      
      ;; --- วาด Leader และ Landing line ---
      (command "_.LINE" pt leader-pt "")
      (setq line1 (entlast))
      
      (command "_.LINE" leader-pt landing-end "")
      (setq line2 (entlast))
      
      ;; --- วาดหัวลูกศร ---
      (setq arr-w (* txt-ht 0.3))
      (command "_.SOLID"
               pt
               (polar pt (+ ang (* pi 0.9)) arr-w)
               (polar pt (- ang (* pi 0.9)) arr-w)
               ""
               "")
      (setq arrow (entlast))
      
      ;; --- สร้าง MTEXT ---
      (if (eq landing-dir "Left")
        (command "_.MTEXT" txt-base "_J" "_BR" "_H" txt-ht "_W" "0" coord-txt "")
        (command "_.MTEXT" txt-base "_J" "_BL" "_H" txt-ht "_W" "0" coord-txt ""))
      (setq mtxt (entlast))
      
      ;; --- รวมเป็น Group ---
      (setq grp-list (list line1 line2 arrow mtxt))
      (command "_.GROUP" "" "" line1 line2 arrow mtxt "")
      
      (princ (strcat "\nสร้างป้ายพิกัดเรียบร้อย: N=" (rtos n-val 2 3)
                     " E=" (rtos e-val 2 3)
                     " EL=" (rtos el-val 2 3)))
    )
    (princ "\nยกเลิกการทำงาน")
  )
  (princ)
)

;;; โหลดข้อความ
(princ "\n*** NEZ.lsp โหลดเรียบร้อย - พิมพ์ NEZ เพื่อใช้งาน ***")
(princ "\n*** พัฒนาโดย JINGJAI SURVEY - jingjaisurvey.xyz ***")
(princ)
