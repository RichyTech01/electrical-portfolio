import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Zap, Wrench, Shield, Clock, CheckCircle, Share2 } from "lucide-react"
import ReferralForm from "@/components/referral-form"

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen  items-center justify-center ">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-[20px]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold ">Honor Electric</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="tel:+2349164633296" className="hidden md:flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <span className="font-medium">+234 916 463 3296</span>
            </Link>
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full ">
        {/* Hero Section */}
        <section className="w-full flex items-center justify-center relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 px-[20px]">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                Licensed & Insured Electrical Contractors
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Professional Electrical Services You Can Trust
              </h1>
              <p className="text-lg text-muted-foreground">
                From simple repairs to complete electrical installations, our team of certified electricians delivers
                quality workmanship and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">Request Service</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">50+</span> satisfied customers
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://african.land/oc-content/plugins/blog/img/blog/382.jpg"
                alt="Electrician at work"
                className="rounded-lg shadow-xl"
                width={600}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900 w-full flex items-center justify-center ">
          <div className="container px-[20px]">
            <div className="text-center mb-16 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Electrical Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide a comprehensive range of electrical services for residential and commercial properties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-10 w-10 text-yellow-500" />,
                  title: "Electrical Repairs",
                  description:
                    "Quick and reliable repairs for all electrical issues, from outlets to circuit breakers.",
                },
                {
                  icon: <Wrench className="h-10 w-10 text-yellow-500" />,
                  title: "Installations",
                  description:
                    "Professional installation of lighting, outlets, panels, and other electrical components.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-yellow-500" />,
                  title: "Safety Inspections",
                  description: "Comprehensive electrical safety inspections to identify potential hazards.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-yellow-500" />,
                  title: "24/7 Emergency Service",
                  description: "Round-the-clock emergency electrical services when you need them most.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-yellow-500" />,
                  title: "Electrical Upgrades",
                  description: "Upgrade your electrical systems to improve efficiency and meet modern demands.",
                },
                {
                  icon: <Wrench className="h-10 w-10 text-yellow-500" />,
                  title: "Electrical Wiring",
                  description: "Specialized in electrical wiring both conduit and surface.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800 px-[20px] w-full flex justify-center ">
          <div className="container">
            <div className="flex flex-col  md:flex-row gap-12 items-center">
              <div className="flex-1">
                <img
                  src="https://media.istockphoto.com/id/1377331559/photo/cropped-portrait-of-an-attractive-female-construction-worker-standing-on-a-building-site-with.jpg?s=612x612&w=0&k=20&c=N0szv8wwuFrOIbBjZlbrBFi-ixllW-AawoIvoEYMlCY="
                  alt="Our team of electricians"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">About Honor Electric</h2>
                <p className="text-lg text-muted-foreground">
                  With over 5 years of experience, Honor Electric has been providing top-quality electrical services to
                  homeowners and businesses.
                </p>
                <div className="space-y-4">
                  {[
                    "Licensed and fully insured professionals",
                    "Upfront pricing with no hidden fees",
                    "Satisfaction guaranteed on all work",
                    "Latest tools and techniques in the industry",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href="#contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-white dark:bg-slate-900 px-[20px] flex justify-center ">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Past Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of our recent electrical projects and installations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://cdn-uploads-frankfurt.starofservice.com/uploads/pj/thumbs-medium/starofservice_bbe60img20161018wa0019.jpg",
              "https://tmkenergies.com/storage/2021/04/42.jpeg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHck-GBTXKNMh5mMkE68YJVwuZcxT3E0UYRTmlKLEpepkXyvCa0uhDuIqfE0KrOUJO-js&usqp=CAU",
              "https://images.nigeriapropertycentre.com/properties/images/thumbs/2843521/06810a5f5f21f1-luxury-5-bedroom-fully-detached-duplex-with-bq-detached-duplexes-for-rent-ikota-lekki-lagos.jpg",
              "https://reikensolutions.com/wp-content/uploads/2021/03/mechanicalelectrical-1024x768.jpeg",
              "https://www.nairaland.com/attachments/1557513_20140718_080213_jpeg4d5fc082a59b8b07826c3469b1b5470b",
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={src}
                  alt={`Electrical work sample ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          </div>
        </section>

        {/* Referral Program Section */}
        <section className="py-16 md:py-24 bg-yellow-50 dark:bg-slate-800/50 px-[20px] flex justify-center ">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <Share2 className="h-16 w-16 text-yellow-500 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Refer and Earn</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Satisfied with our service? Refer Honor Electric to your friends and family and earn a percentage of
                  their first service!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>Earn 10% of your referral's first service fee</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>No limit on the number of referrals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>Get paid once the referred service is completed</p>
                  </div>
                </div>
                <div className="mt-8">
                  <ReferralForm />
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h3 className="text-xl font-bold mb-4 text-center">How It Works</h3>
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Refer a friend or family member</p>
                        <p className="text-sm text-muted-foreground">Share our contact information with them</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">They mention your name when booking</p>
                        <p className="text-sm text-muted-foreground">Make sure they mention you referred them</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Get your percentage</p>
                        <p className="text-sm text-muted-foreground">
                          Receive your referral bonus after their service is complete
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-slate-900 px-[20px] flex justify-center ">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  location: "Local Homeowner",
                  quote:
                    "The team at Honor Electric was professional, punctual, and did an excellent job rewiring my home. I highly recommend their services!",
                },
                {
                  name: "Sarah Johnson",
                  location: "Business Owner",
                  quote:
                    "We had a complex electrical issue at our office that other electricians couldn't solve. Honor Electric diagnosed and fixed it quickly. Outstanding service!",
                },
                {
                  name: "Michael Brown",
                  location: "Property Manager",
                  quote:
                    "I've been using Honor Electric for all my properties for years. Their work is always top-notch, and their prices are fair and transparent.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800 px-[20px] flex justify-center ">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to get started? Contact us today for a free consultation and estimate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <PhoneCall className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <a
                      href="tel:+2349164633296"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      +234 916 463 3296
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-blue-700 dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <a
                      href="mailto:bankoleonaara72@gmail.com"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      bankoleonaara72@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">WhatsApp</h3>
                    <a
                      href="https://wa.me/2349164633296"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      +234 916 463 3296
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-blue-700 dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Address</h3>
                    <p className="text-muted-foreground">Ibadan, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                <form action="https://formspree.io/f/xdknjppv" method="POST" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <select id="service" name="service" className="w-full px-3 py-2 border rounded-md" required>
                      <option value="">Select a service</option>
                      <option value="repair">Electrical Repair</option>
                      <option value="installation">Installation</option>
                      <option value="inspection">Safety Inspection</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="upgrade">Electrical Upgrade</option>
                      <option value="commercial">Commercial Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="referral" className="text-sm font-medium">
                      Referred By (Optional)
                    </label>
                    <input
                      id="referral"
                      name="referral"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter name if someone referred you"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Please describe your electrical needs..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600 dark:bg-blue-800 text-white px-[20px] flex justify-center ">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Electrical Service?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 for all your emergency electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="tel:+2349164633296">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now: +234 916 463 3296
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-green-600 hover:bg-green-700 text-white border-green-500"
                asChild
              >
                <Link href="https://wa.me/2349164633296" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12 px-[20px] w-full flex justify-center ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold text-white">Honor Electric</span>
              </div>
              <p className="text-slate-400">
                Professional electrical services for residential and commercial properties.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2349164633296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Electrical Repairs
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Installations
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Safety Inspections
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Emergency Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Electrical Upgrades
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white">
                    Commercial Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-slate-400 hover:text-white">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-slate-400">Ibadan, Nigeria</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:bankoleonaara72@gmail.com" className="text-slate-400 hover:text-white">
                    bankoleonaara72@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-slate-400" />
                  <a href="tel:+2349164633296" className="text-slate-400 hover:text-white">
                    +234 916 463 3296
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 flex justify-center ">
            <p>&copy; {new Date().getFullYear()} Honor Electric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
