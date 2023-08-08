import React, { useState } from 'react';
import './ReferralPage.css';

const referralData = [
  {
    title: 'Referral Program 1',
    description: 'Earn $10 for each successful referral',
    link: 'https://www.example.com/referral/123',
    image: 'https://d22ueo28hfk252.cloudfront.net/Content/versioned/2.0.0.1/images/version4/promotion_june_21/zenrik_images/invitefriends-16240185040737.png?v=1624018504',
    details: 'Refer your friends and earn $10 for each successful referral. Share your referral link with friends and family and start earning rewards today!',
  },
  {
    title: 'Referral Program 2',
    description: 'Earn 20% commission for each successful referral',
    link: 'https://www.example.com/referral/456',
    image: 'https://www.mahindrafirstchoice.com/assets/Referral/img/Voucher%20banner.png',
    details: 'Join our referral program and earn a 20% commission for each successful referral. The more you refer, the more you earn!',
  },
  // Add more referral programs as needed
];


const ReferralPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleShowMoreClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(referralData[index].link);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="referral-page">
      <header>
        <h1>Referral Programs</h1>
      </header>

      <main>
        <div className="referral-page__container">
          {referralData.map((referral, index) => (
            <div className={`referral-page__card ${expandedIndex === index ? 'expanded' : ''}`} key={index}>
              <img className="referral-page__card-image" src={referral.image} alt={referral.title} />
              <h2 className="referral-page__card-title">{referral.title}</h2>
              <p className="referral-page__card-description">{referral.description}</p>
              <div className="referral-page__card-link">
                <input type="text" value={referral.link} readOnly />
                <button
                  className="ctn ctn-s"
                  onClick={() => handleCopyClick(index)}
                >
                  {copiedIndex === index ? 'Link Copied' : 'Copy'}
                </button>
              </div>
              <button className="ctn ctn-m ctn-a" onClick={() => handleShowMoreClick(index)}>
                {expandedIndex === index ? 'Show Less' : 'Show More'}
              </button>
              {expandedIndex === index && (
                <div className="referral-page__expand-content">
                  <p>{referral.details}</p>
                </div>
              )}
              <div className="referral-page__share-links">
                <button className="referral-page__share-link">
                  <i className="fa fa-facebook"></i>
                </button>
                <button className="referral-page__share-link">
                  <i className="fa fa-twitter"></i>
                </button>
                <button className="referral-page__share-link">
                  <i className="fa fa-linkedin"></i>
                </button>
                <button className="referral-page__share-link">
                  <i className="fa fa-whatsapp"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReferralPage;