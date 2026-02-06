'use client';

import ServiceCard from '../ui/ServicesCard';
import SwipeContainer from '../interaction/SwipeContainer';
import { ServiceItem, services } from '@/app/data/services';

type Props = {
  onChangeSection: (section: string) => void;
};

const CTA_LABEL = '話を聞く';
const TARGET_SECTION = 'contact';

export default function ServicesSection({ onChangeSection }: Props) {
  const handleClick = () => onChangeSection(TARGET_SECTION);

  return (
    <section id="services-section" className="services-section">
      <ServicesHeader />

      <PcServices
        services={services}
        onClick={handleClick}
      />

      <SpServices
        services={services}
        onClick={handleClick}
      />
    </section>
  );
}

/* ==============================
   Internal Components
================================ */

function ServicesHeader() {
  return (
    <div className="services-container">
      <h2>SERVICES</h2>
      <p>私たちが提供する３つの事業領域</p>
    </div>
  );
}

function PcServices({
  services,
  onClick,
}: {
  services: ServiceItem[];
  onClick: () => void;
}) {
  return (
    <div className="pc-only grid grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          button={CTA_LABEL}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

function SpServices({
  services,
  onClick,
}: {
  services: ServiceItem[];
  onClick: () => void;
}) {
  return (
    <div className="sp-only">
      <SwipeContainer length={services.length}>
        {(index) => (
          <div className="sp-service-wrapper">
            <ServiceCard
              {...services[index]}
              button={CTA_LABEL}
              onClick={onClick}
            />
            <p className="swipe-telop">← 左右にフリック →</p>
          </div>
        )}
      </SwipeContainer>
    </div>
  );
}