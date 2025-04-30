import React from "react";
import { motion } from "framer-motion";
import { SocialLink } from "../types";
import {
  PiTelegramLogoBold,
  PiInstagramLogoBold,
  PiTiktokLogoBold,
} from "react-icons/pi";
import { LiaDiscord } from "react-icons/lia";

const socialLinks: SocialLink[] = [
  {
    platform: "Telegram",
    url: "https://t.me/Lion_Dubai",
    icon: "telegram",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/lion_dubai_?igsh=MW16a2lveGRhYjhiZA%3D%3D&utm_source=qr",
    icon: "instagram",
  },
  {
    platform: "Discord",
    url: "https://discord.com/users/462748514519351298",
    icon: "discord",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@lion_dubai_?_r=1&_d=eaacmmbgeejmfi&sec_uid=MS4wLjABAAAAQkG4ljVRmQHj9y7DjfO-qnwBU-BfGRu6TveWairOxjukCSv49oBR-rcFWk_L0joJ&share_author_id=7291222956894012448&sharer_language=ar&source=h5_m&u_code=eag7i3e2hf3a25&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAQkG4ljVRmQHj9y7DjfO-qnwBU-BfGRu6TveWairOxjukCSv49oBR-rcFWk_L0joJ&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7291222956894012448&share_link_id=3035A6D3-A7AF-45A0-A3F8-1AD247F2440A&share_app_id=1233",
    icon: "tiktok",
  },
];

const ContactSection: React.FC = () => {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "telegram":
        return <PiTelegramLogoBold size={32} />;
      case "instagram":
        return <PiInstagramLogoBold size={32} />;
      case "discord":
        return <LiaDiscord size={32} />;
      case "tiktok":
        return <PiTiktokLogoBold size={32} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gaming-dark">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Connect With <span className="text-gaming-accent">Us</span>
          </h2>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Follow us on social media for updates, promotions, and gaming news.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gaming-card rounded-xl hover:bg-opacity-80 transition-all duration-300 w-28"
            >
              <div className="text-gaming-accent mb-2">
                {getSocialIcon(link.icon)}
              </div>
              <span className="text-white font-medium">{link.platform}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
