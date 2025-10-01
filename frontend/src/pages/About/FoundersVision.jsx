import React from "react";
import Growthjourney from "../../components/AboutComponent/growthjourney";
import Footer from "../../components/Footer";
import Navbar from "../../components/nav";
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";

function FoundersVision() {
  return (
    <div>
      <Navbar />

      <Growthjourney />
      <ChatWidget />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default FoundersVision;
