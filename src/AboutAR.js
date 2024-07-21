import React from 'react';
import './About.css';  
import teamImage from './imageTeam.png';

function About({ language }) {
  return (
    <main className="about-page">
      <h1>{language === 'en' ? 'About Us' : 'نبذة عنا'}</h1>

      <div className="about-content">
        <div className="team-image">
          <img src={teamImage} alt="Our Company" />
          <span className="sr-only">رسم اجتماع الفريق</span> 
        </div>
        <div className="company-info">
          <h2>{language === 'en' ? 'Our Company' : 'شركتنا'}</h2>
          <p>
            {language === 'en' ? (
              <>
                Pixel Nexus is a passionate gaming hub founded by gamers, for gamers. In our first year, we've established ourselves as a trusted destination for buying and selling pre-owned gaming products, offering a curated selection of consoles, games, accessories, and collectibles at competitive prices. But we're more than just a marketplace. We believe in the power of community. That's why we've created a welcoming space where gamers can connect, share experiences, and celebrate their love for gaming. Through online forums, tournaments, and engaging events, we strive to foster a vibrant community that goes beyond transactions. Whether you're a seasoned pro or just starting your gaming journey, we're here to provide you with quality products, exceptional service, and a sense of belonging. Join us as we continue to build a gaming community that's inclusive, passionate, and always ready for the next adventure.
              </>
            ) : (
              <>
                Pixel Nexus هو مركز ألعاب شغوف أسسه اللاعبون من أجل اللاعبين. في عامنا الأول، أثبتنا أنفسنا كوجهة موثوق بها لشراء وبيع منتجات الألعاب المستعملة، حيث نقدم مجموعة مختارة بعناية من وحدات التحكم والألعاب والملحقات والمقتنيات بأسعار تنافسية. لكننا أكثر من مجرد سوق. نحن نؤمن بقوة المجتمع. لهذا السبب أنشأنا مساحة ترحيبية حيث يمكن للاعبين التواصل وتبادل الخبرات والاحتفال بحبهم للألعاب. من خلال المنتديات عبر الإنترنت والبطولات والفعاليات المثيرة، نسعى جاهدين لتعزيز مجتمع نابض بالحياة يتجاوز المعاملات. سواء كنت محترفًا متمرسًا أو بدأت للتو رحلتك في اللعب، نحن هنا لنوفر لك منتجات عالية الجودة وخدمة استثنائية وشعور بالانتماء. انضم إلينا بينما نواصل بناء مجتمع ألعاب شامل وشغوف ومستعد دائماً للمغامرة التالية.
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
