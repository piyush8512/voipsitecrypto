import ContactForm from "@/components/contact/ContactForm2";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-[#0a101f] via-[#1a2030] to-[#3a3f4b]  justify-center ">
      <div className="pt-15">
        {" "}
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
