
import React, { useState } from 'react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  isVideo?: boolean;
  videoUrl?: string; // URL for the video (YouTube, Drive, or direct MP4)
  gallery?: string[];
}

interface Service {
  title: string;
  icon: string;
  description: string;
  longDescription: string[];
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  details?: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold tracking-wider text-accent cursor-pointer">
              JINGJAI <span className="text-white">SURVEY</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-accent transition px-3 py-2 rounded-md font-medium">บริการของเรา</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ผลงาน</a>
              <a href="#quotation" onClick={(e) => handleScroll(e, 'quotation')} className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ขอใบเสนอราคา</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ติดต่อเรา</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="block hover:bg-gray-700 px-3 py-2 rounded-md font-medium">บริการของเรา</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="block hover:bg-gray-700 px-3 py-2 rounded-md font-medium">ผลงาน</a>
            <a href="#quotation" onClick={(e) => handleScroll(e, 'quotation')} className="block hover:bg-gray-700 px-3 py-2 rounded-md font-medium">ขอใบเสนอราคา</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block hover:bg-gray-700 px-3 py-2 rounded-md font-medium">ติดต่อเรา</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const handleScrollToQuotation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('quotation');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2000" 
          alt="Engineering Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          บริการสำรวจครบวงจร <br/>
          <span className="text-accent">แม่นยำ รวดเร็ว โดยทีมงานมืออาชีพ</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
          รับวางผังเสาเข็ม, ทำแผนที่ Topographic Map, และงานสำรวจเพื่อการก่อสร้างทุกประเภท
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://line.me/ti/p/~kanathipcharoen" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-navy font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
          >
            <i className="fa-brands fa-line text-2xl mr-2"></i> ปรึกษาฟรี (LINE)
          </a>
          <a 
            href="#quotation" 
            onClick={handleScrollToQuotation}
            className="bg-white text-navy font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-all border-2 border-transparent flex items-center justify-center shadow-lg"
          >
            <i className="fa-solid fa-file-invoice-dollar mr-2"></i> ขอใบเสนอราคา
          </a>
        </div>
      </div>
    </header>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "งานวางผังเสาเข็ม",
      icon: "fa-hard-hat",
      description: "ตรวจสอบแนวเขตและวางตำแหน่งเสาเข็มตามแบบแปลนด้วยกล้อง Total Station",
      longDescription: [
        "ตรวจสอบตำแหน่งพิกัดแนวเขตที่ดิน (Boundary Survey)",
        "จัดทำแผนวางตำแหน่งเสาเข็มแล้วขออนุมัติผู้ว่าจ้างวางพิกัดที่คอนเฟิร์ม",
        "วางผังตำแหน่งเสาเข็ม (Piling Layout) พร้อมตรวจสอบระยะ Offset",
        "จัดทำรายงานการตรวจสอบตำแหน่ง (As-built Piling)",
        "เก็บค่า (Pile Deviation) หลังตอกเข็มแล้วเสร็จจัดทำ (Report) รายงานผู้รับจ้าง",
      ]
    },
    {
      title: "แผนที่ภูมิประเทศ",
      icon: "fa-map-marked-alt",
      description: "จัดทำ Topographic Map สำหรับงานออกแบบวิศวกรรม พร้อมเขียนแบบ 3D สามารถนำไปทำงานต่อ ใน Sketch up ได้ทันที",
      longDescription: [
        "จัดทำแผนที่เส้นชั้นความสูง (Contour Map)",
        "สำรวจรายละเอียดทางกายภาพ เช่น ถนน อาคาร ต้นไม้ และเสาไฟฟ้า",
        "คำนวณปริมาณงานดินตัด-ดินถม (Earthwork Calculation)",
        "จัดทำแผนที่ในรูปแบบไฟล์ CAD (.dwg) , PDF , SketcUp (skp)",
      ]
    },
    {
      title: "งานสำรวจเพื่อการก่อสร้าง",
      icon: "fa-drafting-compass",
      description: "งานระดับ งานเช็คแนวดิ่ง และงานสำรวจควบคุมงานก่อสร้างทุกประเภท",
      longDescription: [
        "การสำรวจเพื่อทำแผนที่ภูมิประเทศ (Topographic Survey)",
        "การสร้างหมุดควบคุม (Establishing Control Network)",
        "การวางผังและกำหนดตำแหน่ง (Setting Out/Staking Out)",
        "การสำรวจตรวจสอบและทำแบบจริง (Monitoring & As-built Survey)"
      ]
    },
    {
      title: "ให้คำปรึกษางานสำรวจ",
      icon: "fa-users-cog",
      description: "วางแผนงานสำรวจโดยวิศวกรและช่างสำรวจผู้เชี่ยวชาญ",
      longDescription: [
        "วิเคราะห์แบบแปลนก่อนเริ่มงานเพื่อลดความผิดพลาด",
        "ให้คำแนะนำการเลือกใช้อุปกรณ์สำรวจที่เหมาะสม",
        "ตรวจสอบและควบคุมมาตรฐานงานสำรวจในโครงการ",
        "จัดเตรียมข้อมูลพิกัดสำหรับระบบ GPS (GNSS Survey)"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">บริการของเรา</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600">เลือกบริการที่สนใจเพื่อดูรายละเอียดเพิ่มเติม</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className={`cursor-pointer p-8 rounded-2xl border-b-4 transition-all duration-300 transform ${
                activeIndex === idx 
                  ? 'border-accent shadow-2xl scale-105 bg-navy text-white' 
                  : 'border-transparent bg-white shadow-md hover:border-accent hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="text-4xl mb-6 text-accent">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${activeIndex === idx ? 'text-white' : 'text-navy'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${activeIndex === idx ? 'text-gray-100' : 'text-gray-800'}`}>
                {service.description}
              </p>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === idx ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-3 text-sm border-t border-gray-700 pt-6">
                  {service.longDescription.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <i className="fa-solid fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      <span className={activeIndex === idx ? 'text-gray-100' : 'text-gray-800'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-6 text-xs font-bold flex items-center tracking-wider uppercase ${activeIndex === idx ? 'text-accent' : 'text-navy opacity-80'}`}>
                {activeIndex === idx ? 'ปิดรายละเอียด' : 'อ่านรายละเอียดเพิ่มเติม'}
                <i className={`fa-solid fa-chevron-down ml-2 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 6,
      title: "คุณกำลังจะสร้างบ้านใช่ไหม ",
      description: "คุณกำลังจะสร้างบ้านใช่ไหม? ดูคลิปนี้ก่อน! ปัญหาหน้างานไม่ตรงแบบ วางผังผิด ทุบสร้างใหม่ ชมคำแนะนำเบื้องต้น",
      image: "https://img5.pic.in.th/file/secure-sv1/Whisk_qdnygdm4m2m4ajy40sombdotqwy2qtl1ymzl1sm.png",
      isVideo: true,
      videoUrl: "https://drive.google.com/file/d/1n3l0TbF9gfFeGk677Vmml8IoX1JlA3bS/view?usp=sharing"
    },
    {
      id: 1,
      title: "วางผังอาคารคุมจ่าย ปั้มน้ำมัน PT",
      description: "งานวางผังอาคารคุมจ่าย ตรวจสอบพิกัดและระยะตามแบบวิศวกรรมอย่างละเอียด",
      image: "https://img2.pic.in.th/f29a7128e25a4ee2ce6002212036c088.png",
      gallery: [
        "https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_7468_250407_26.jpg",
        "https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_7468_250407_16f83e3e43ae2602c5.jpg",
        "https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_7468_250407_5.jpg"
      ]
    },
    {
      id: 5,
      title: "แผนที่ TOPOGRAPHIC MAP",
      description: "งานสำรวจภูมิประเทศ เก็บรายละเอียดเส้นชั้นความสูงสร้างแผนที่รายละเอียดสูง",
      image: "https://img5.pic.in.th/file/secure-sv1/63551328ece50d98a0df.png",
      gallery: [
        "https://img5.pic.in.th/file/secure-sv1/-15ea16487f161f176.png",
        "https://img5.pic.in.th/file/secure-sv1/237d8197f5f3fe8e4.png",
        "https://img5.pic.in.th/file/secure-sv1/3891d99cdfa1f60cd.png"
      ]
    },
    {
      id: 2,
      title: "งานสำรวจรายเดือน",
      description: "โครงการก่อสร้างโรงแยกก๊าซธรรมชาติหน่วยที่ 7",
      image: "https://img5.pic.in.th/file/secure-sv1/IMG_8461f53facef34b03de8.jpg",
      gallery: [
        "https://img5.pic.in.th/file/secure-sv1/IMG_7435555.png",
        "https://img2.pic.in.th/IMG_7372-1.png",
        "https://img2.pic.in.th/IMG_775056.png"
      ]
    },
    {
      id: 3,
      title: "วางตำแหน่งเสาเข็ม หอพัก 3 ชั้น",
      description: "งานวางตำแหน่งเสาเข็ม และ ตำแหน่ง Grid Line พร้อมให้ระดับ off 1 m. รามคำแหง 53",
      image: "https://img5.pic.in.th/file/secure-sv1/IMG_8163-1.png",
      gallery:[
        "https://img2.pic.in.th/IMG_3564-1325ced3e18eb3e23.png",
        "https://img2.pic.in.th/IMG_3628-1.png",
        "https://s.imgz.io/2026/01/17/IMG_3577-16c07afac51610935.png",
      ]
    },
    {
      id: 4,
      title: "วางผังอาคารบ้านพักอาศัย จ.ปทุมธานี",
      description: "ทำหมุดควบคุมพร้อมครอบผังบริเวณบ้านพักอาศัยแล้ววางตำแหน่งเสาเข็ม",
      image: "https://img5.pic.in.th/file/secure-sv1/-1---Model_recover-Layout1.jpg",
      gallery:[
        "https://img5.pic.in.th/file/secure-sv1/IMG_2495.png",
        "https://img2.pic.in.th/IMG_2492-1.png",
        "https://img2.pic.in.th/IMG_2483.png",
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">ผลงานที่ผ่านมา</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col group"
            >
              <div className="h-64 overflow-hidden bg-gray-200 relative">
                {project.isVideo ? (
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => window.open(project.videoUrl, '_blank')}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent text-navy rounded-full flex items-center justify-center shadow-xl animate-pulse">
                        <i className="fa-solid fa-play text-2xl ml-1"></i>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700" 
                    onClick={() => window.open(project.image, '_blank')} 
                  />
                )}
                
                <div className="absolute top-4 right-4">
                  <span className={`${project.isVideo ? 'bg-accent text-navy' : 'bg-navy bg-opacity-70 text-white'} px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
                    {project.isVideo ? 'Video' : 'Gallery'}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="font-bold text-xl text-navy mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {!project.isVideo && project.gallery && project.gallery.length > 0 && (
                  <div className="mt-4 border-t pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="h-20 rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-accent transition-all"
                          onClick={() => window.open(img, '_blank')}
                        >
                          <img src={img} alt="Detail" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.isVideo && (
                  <button 
                    onClick={() => window.open(project.videoUrl, '_blank')}
                    className="mt-4 w-full bg-navy text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                  >
                    <i className="fa-solid fa-circle-play"></i> ดูก่อนสายเกินไป !
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuotationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', details: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'กรุณากรอกชื่อ';
    if (!formData.phone) newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
    }
    if (!formData.service) newErrors.service = 'กรุณาเลือกบริการ';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputStyles = "w-full px-4 py-3 rounded-lg border border-gray-300 outline-none transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent focus:scale-[1.01] focus:shadow-lg bg-white";

  return (
    <section id="quotation" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-accent p-10 text-navy">
            <h2 className="text-3xl font-bold mb-6">ขอใบเสนอราคา</h2>
            <p className="mb-8 opacity-90 font-medium">กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับเพื่อประเมินราคาเบื้องต้น</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-clock"></i>
                <span>ตอบกลับภายใน 24 ชม.</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:0820025124" className="hover:underline">082-002-5124</a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-10 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <i className="fa-solid fa-circle-check text-green-500 text-5xl"></i>
                <h3 className="text-2xl font-bold text-navy">ได้รับข้อมูลแล้ว</h3>
                <p className="text-gray-600">เราจะติดต่อกลับหาท่านโดยเร็วที่สุด</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อผู้ติดต่อ</label>
                    <input 
                      type="text" 
                      className={inputStyles} 
                      placeholder="ชื่อ-นามสกุล" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                    <input 
                      type="tel" 
                      className={inputStyles} 
                      placeholder="08X-XXX-XXXX" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">อีเมล (ถ้ามี)</label>
                    <input 
                      type="email" 
                      className={inputStyles} 
                      placeholder="example@email.com" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ประเภทงาน</label>
                  <select 
                    className={inputStyles}
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">เลือกประเภทงาน</option>
                    <option value="piling">งานวางผังเสาเข็ม</option>
                    <option value="topography">งานทำแผนที่ภูมิประเทศ</option>
                    <option value="level">งานถ่ายระดับ</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                  {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service}</span>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">รายละเอียดเพิ่มเติม</label>
                  <textarea 
                    rows={3} 
                    className={inputStyles} 
                    placeholder="ขนาดพื้นที่, สถานที่ตั้งโครงการ..."
                    value={formData.details}
                    onChange={e => setFormData({...formData, details: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]">
                  ส่งข้อมูลขอใบเสนอราคา
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12 mb-12">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold text-accent mb-4">JINGJAI SURVEY</h2>
            <p className="text-gray-400 mb-6">
              พันธมิตรที่ไว้วางใจได้ในงานสำรวจวิศวกรรม ด้วยอุปกรณ์ที่ทันสมัยและทีมงานคุณภาพ
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/jingjaisurvey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all shadow-blue-500/20 shadow-lg"
                title="เยี่ยมชม Facebook"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a 
                href="https://line.me/ti/p/~kanathipcharoen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all shadow-green-500/20 shadow-lg"
              >
                <i className="fa-brands fa-line text-lg"></i>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">ติดต่อเรา</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <i className="fa-solid fa-phone text-accent mt-1"></i>
                <a href="tel:0820025124" className="text-xl font-semibold hover:text-accent transition-colors">082-002-5124</a>
              </li>
              <li className="flex items-start space-x-3 group">
                <i className="fa-brands fa-line text-accent text-xl mt-1"></i>
                <div>
                  <p className="text-sm text-gray-400">Line ID</p>
                  <a href="https://line.me/ti/p/~kanathipcharoen" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors font-medium">kanathipcharoen</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <i className="fa-brands fa-facebook text-accent text-xl mt-1"></i>
                <div>
                  <p className="text-sm text-gray-400">Facebook Page</p>
                  <a href="https://www.facebook.com/jingjaisurvey" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors font-medium">JINGJAI SURVEY</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">ที่ตั้ง</h3>
            <div className="flex items-start space-x-3 text-gray-400">
              <i className="fa-solid fa-location-dot text-accent mt-1"></i>
              <p>
                160/18 ถนน พายัพทิศ 4 ตำบลในเมือง<br/>
                อำเภอเมืองนครราชสีมา จ.นครราชสีมา 30000
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-2 gap-2">
              <a href="tel:0820025124" className="bg-accent text-navy py-2 rounded font-bold text-center hover:bg-yellow-500 transition-colors text-sm">
                <i className="fa-solid fa-phone mr-1"></i> โทรเลย
              </a>
              <a 
                href="https://www.facebook.com/jingjaisurvey" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white py-2 rounded font-bold text-center hover:bg-blue-700 transition-colors text-sm shadow-blue-500/20 shadow-lg"
              >
                <i className="fa-brands fa-facebook mr-1"></i> Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} JINGJAI SURVEY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <a 
        href="https://www.facebook.com/jingjaisurvey" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce-sync"
        title="ติดตามบน Facebook"
      >
        <i className="fa-brands fa-facebook-f text-2xl"></i>
      </a>
      <a 
        href="https://line.me/ti/p/~kanathipcharoen" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce-sync"
        title="ติดต่อผ่าน LINE"
      >
        <i className="fa-brands fa-line text-3xl"></i>
      </a>
      <a 
        href="tel:0820025124" 
        className="w-14 h-14 bg-accent text-navy rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce-sync"
        title="โทรทันที"
      >
        <i className="fa-solid fa-phone text-2xl"></i>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <QuotationForm />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;