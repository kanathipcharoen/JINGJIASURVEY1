
import React, { useState } from 'react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  isVideo?: boolean;
  gallery?: string[];
}

interface Service {
  title: string;
  icon: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  details?: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wider text-accent">JINGJAI <span className="text-white">SURVEY</span></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="hover:text-accent transition px-3 py-2 rounded-md font-medium">บริการของเรา</a>
              <a href="#portfolio" className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ผลงาน</a>
              <a href="#quotation" className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ขอใบเสนอราคา</a>
              <a href="#contact" className="hover:text-accent transition px-3 py-2 rounded-md font-medium">ติดต่อเรา</a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
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
            <a href="#services" onClick={() => setIsOpen(false)} className="block hover:bg-gray-700 px-3 py-2 rounded-md">บริการของเรา</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block hover:bg-gray-700 px-3 py-2 rounded-md">ผลงาน</a>
            <a href="#quotation" onClick={() => setIsOpen(false)} className="block hover:bg-gray-700 px-3 py-2 rounded-md">ขอใบเสนอราคา</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:bg-gray-700 px-3 py-2 rounded-md">ติดต่อเรา</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
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
          href="#quotation" 
          className="bg-accent text-navy font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-xl"
        >
          ปรึกษาฟรี
        </a>
        <a 
          href="tel:0820025124" 
          className="bg-white text-navy font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-all border-2 border-transparent"
        >
          <i className="fa-solid fa-phone mr-2"></i> 082-002-5124
        </a>
      </div>
    </div>
  </header>
);

const Services = () => {
  const services: Service[] = [
    {
      title: "งานวางผังเสาเข็ม",
      icon: "fa-hard-hat",
      description: "ตรวจสอบแนวเขตและวางตำแหน่งเสาเข็มตามแบบแปลนด้วยกล้อง Total Station ที่มีความแม่นยำสูง"
    },
    {
      title: "แผนที่ภูมิประเทศ",
      icon: "fa-map-marked-alt",
      description: "จัดทำ Topographic Map สำหรับงานออกแบบวิศวกรรม พร้อมระดับความสูงและรายละเอียดทางกายภาพ"
    },
    {
      title: "งานสำรวจเพื่อการก่อสร้าง",
      icon: "fa-drafting-compass",
      description: "งานระดับ งานเช็คแนวดิ่ง และงานสำรวจที่เกี่ยวข้องกับการควบคุมงานก่อสร้างอาคารและโครงสร้าง"
    },
    {
      title: "ให้คำปรึกษางานสำรวจ",
      icon: "fa-users-cog",
      description: "ให้คำปรึกษาและวางแผนงานสำรวจโดยวิศวกรและช่างสำรวจผู้เชี่ยวชาญ เพื่อลดความผิดพลาดในงาน"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">บริการของเรา</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border-b-4 border-transparent hover:border-accent hover:shadow-2xl transition-all group">
              <div className="text-accent text-4xl mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
      id: 1,
      title: "วางผังอาคารคุมจ่าย ปั้มน้ำมัน PT",
      description: "งานวางผังอาคารคุมจ่าย ตรวจสอบพิกัดและระยะตามแบบวิศวกรรมอย่างละเอียด",
      image: "https://img5.pic.in.th/file/secure-sv1/7e70705f5f926051e2b0546c1a4b0faf.png",
      gallery: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1581094128542-a76d3a50d446?auto=format&fit=crop&q=80&w=400"
      ]
    },
    {
      id: 5,
      title: "ติดตามความคืบหน้างานก่อสร้าง",
      description: "บริการโดรนสำรวจติดตามความคืบหน้าโครงการรายสัปดาห์ (Construction Monitoring)",
      image: "https://www.example.com/construction_monitoring.mp4",
      isVideo: true
    },
    {
      id: 2,
      title: "งานสำรวจทางหลวง",
      description: "งานระดับและทำแผนที่ตัดขวางแนวถนนความยาว 5 กม.",
      image: "https://images.unsplash.com/photo-1590486803833-ffc9171e6bc9?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "โรงงานอุตสาหกรรม",
      description: "งานวางศูนย์กลางเครื่องจักรและความเที่ยงตรงสูง",
      image: "https://images.unsplash.com/photo-1581094128542-a76d3a50d446?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      title: "อาคารสูง 20 ชั้น",
      description: "งานถ่ายดิ่งและวางผังโครงสร้างอาคารพาณิชย์",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600"
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
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col group">
              <div className="h-64 overflow-hidden bg-gray-200 relative">
                {project.isVideo ? (
                  <video 
                    className="w-full h-full object-cover" 
                    controls 
                    muted 
                    loop
                  >
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500" 
                    onClick={() => window.open(project.image, '_blank')} 
                  />
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.isVideo ? (
                    <span className="bg-accent text-navy px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase">Video</span>
                  ) : (
                    <span className="bg-navy bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Photo</span>
                  )}
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="font-bold text-xl text-navy mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Gallery Implementation */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mt-4 border-t pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">รายละเอียดเพิ่มเติม</p>
                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="h-20 rounded-lg overflow-hidden border border-gray-200 shadow-sm cursor-pointer hover:border-accent hover:shadow-md transition-all group/thumb"
                          onClick={() => window.open(img, '_blank')}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} detail ${idx + 1}`} 
                            className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    details: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'กรุณากรอกชื่อผู้ติดต่อ';
    else if (formData.name.trim().length < 2) newErrors.name = 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร';

    const phoneRegex = /^0\d{8,9}$/;
    if (!formData.phone.trim()) newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    else if (!phoneRegex.test(formData.phone.replace(/[- ]/g, ''))) newErrors.phone = 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง (เช่น 0812345678)';

    if (!formData.service) newErrors.service = 'กรุณาเลือกประเภทงาน';
    
    if (!formData.details.trim()) newErrors.details = 'กรุณากรอกรายละเอียดงาน';
    else if (formData.details.trim().length < 10) newErrors.details = 'กรุณาระบุรายละเอียดเพิ่มเติม (อย่างน้อย 10 ตัวอักษร)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', service: '', details: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="quotation" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-accent p-10 flex flex-col justify-center text-navy">
            <h2 className="text-3xl font-bold mb-6">ประเมินราคา และขอคำปรึกษา</h2>
            <p className="mb-8 font-medium">กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับเพื่อประเมินราคาเบื้องต้นได้ทันที</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-clock text-xl"></i>
                <span>ตอบกลับภายใน 24 ชม.</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-check-circle text-xl"></i>
                <span>ที่ปรึกษาฟรี ไม่มีค่าใช้จ่าย</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-10 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy">ได้รับข้อมูลแล้ว!</h3>
                <p className="text-gray-600">ทีมงานจะรีบติดต่อกลับหาคุณโดยเร็วที่สุด</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อผู้ติดต่อ</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-accent'} focus:ring-2 focus:border-transparent outline-none transition-all`} 
                      placeholder="ชื่อ-นามสกุล" 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-accent'} focus:ring-2 focus:border-transparent outline-none transition-all`} 
                      placeholder="08X-XXX-XXXX" 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ประเภทงาน</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-accent'} focus:ring-2 focus:border-transparent outline-none appearance-none bg-white transition-all`}
                  >
                    <option value="">เลือกประเภทงาน</option>
                    <option value="piling">งานวางผังเสาเข็ม</option>
                    <option value="topography">งานทำแผนที่ภูมิประเทศ</option>
                    <option value="level">งานถ่ายระดับ</option>
                    <option value="other">งานสำรวจประเภทอื่นๆ</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">รายละเอียด/ขนาดพื้นที่</label>
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4} 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.details ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-accent'} focus:ring-2 focus:border-transparent outline-none transition-all`} 
                    placeholder="ระบุรายละเอียดเพิ่มเติม เช่น ขนาดพื้นที่, สถานที่ตั้งโครงการ..."
                  ></textarea>
                  {errors.details && <p className="text-red-500 text-xs mt-1 ml-1">{errors.details}</p>}
                </div>
                <button type="submit" className="w-full bg-navy text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg text-lg transform hover:-translate-y-1 active:translate-y-0">
                  ขอใบเสนอราคา
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-navy text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12 mb-12">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-accent mb-4">JINGJAI SURVEY</h2>
          <p className="text-gray-400 mb-6 max-w-sm">
            พันธมิตรที่ไว้วางใจได้ในงานสำรวจวิศวกรรม ด้วยอุปกรณ์ที่ทันสมัยและทีมงานคุณภาพ
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/jingjaisurvey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 active:scale-95">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://line.me/ti/p/~kanathipcharoen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110 active:scale-95">
              <i className="fa-brands fa-line text-lg"></i>
            </a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-6">ช่องทางการติดต่อ</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 group">
              <i className="fa-solid fa-phone text-accent mt-1 group-hover:rotate-12 transition-transform"></i>
              <a href="tel:0820025124" className="text-xl font-semibold hover:text-accent transition-colors">082-002-5124</a>
            </li>
            <li className="flex items-start space-x-3 group">
              <i className="fa-brands fa-facebook text-accent text-xl mt-1 group-hover:scale-125 transition-transform duration-300"></i>
              <div>
                <p className="text-sm text-gray-400">Facebook Page</p>
                <a href="https://www.facebook.com/jingjaisurvey" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">JINGJAI SURVEY</a>
              </div>
            </li>
            <li className="flex items-start space-x-3 group">
              <i className="fa-brands fa-line text-accent text-xl mt-1 group-hover:rotate-12 transition-transform"></i>
              <div>
                <p className="text-sm text-gray-400">Line ID</p>
                <a href="https://line.me/ti/p/~kanathipcharoen" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">kanathipcharoen</a>
              </div>
            </li>
            <li className="flex items-start space-x-3 group">
              <i className="fa-solid fa-envelope text-accent mt-1 group-hover:-translate-y-1 transition-transform"></i>
              <a href="mailto:info@jingjaisurvey.com" className="hover:text-accent transition-colors">info@jingjaisurvey.com</a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-6">ที่ตั้งสำนักงาน</h3>
          <div className="flex items-start space-x-3">
            <i className="fa-solid fa-location-dot text-accent mt-1"></i>
            <p className="text-gray-400">
              เลขที่ 123/45 หมู่บ้านโครงการสำรวจวิศวกรรม<br/>
              ตำบลบางกรวย อำเภอบางกรวย<br/>
              จังหวัดนนทบุรี 11130
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-2">
             <a 
              href="tel:0820025124" 
              className="flex items-center justify-center bg-accent text-navy py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors text-sm"
            >
              <i className="fa-solid fa-phone mr-1"></i> โทรเลย
            </a>
            <a 
              href="https://line.me/ti/p/~kanathipcharoen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition-colors text-sm"
            >
              <i className="fa-brands fa-line mr-1"></i> LINE
            </a>
            <a 
              href="https://www.facebook.com/jingjaisurvey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all text-sm animate-pulse-slow shadow-lg hover:shadow-blue-500/20"
            >
              <i className="fa-brands fa-facebook mr-2"></i> ติดตามเราบน Facebook
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

const FloatingActionButton = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
    <a 
      href="https://www.facebook.com/jingjaisurvey" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:rotate-6 group"
      title="ติดตามเราบน Facebook"
    >
      <i className="fa-brands fa-facebook-f text-2xl group-hover:scale-125 transition-transform"></i>
    </a>
    <a 
      href="https://line.me/ti/p/~kanathipcharoen" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce"
      title="ติดต่อผ่าน LINE"
    >
      <i className="fa-brands fa-line text-3xl"></i>
    </a>
    <a 
      href="tel:0820025124" 
      className="w-14 h-14 bg-accent text-navy rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
      title="โทรสอบถาม"
    >
      <i className="fa-solid fa-phone text-2xl"></i>
    </a>
  </div>
);

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
