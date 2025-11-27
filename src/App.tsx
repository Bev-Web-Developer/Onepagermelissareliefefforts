import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "./imports/svg-iyozb0fv3v";
import imgContainer from "figma:asset/d7afc7e5ad4911a6b4656487edce3a5a71a3e3bc.png";
//import imgSection from "public/Hero IMG-min.png";
import imgEmergencyResponseTeamInAction from "figma:asset/80c9b72e5f35920df6eba6765f947fe4da5f91be.png";
import imgEmergencyResponseTeamInAction1 from "figma:asset/a49f0396b71952df758875221562fe6444aa94ce.png";
import { DonateModal } from './components/DonateModal';

function Logo() {
  return (
    <div className="h-[42.494px] relative shrink-0 w-[130.181px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 43">
        <g clipPath="url(#clip0_1_89)">
          <path d={svgPaths.p3fa57600} fill="#053FE7" />
          <path d={svgPaths.p16589780} fill="#053FE7" />
          <path d={svgPaths.p3cd29600} fill="#053FE7" />
          <path d={svgPaths.p2383b100} fill="#053FE7" />
          <path d={svgPaths.pd10e880} fill="#053FE7" />
          <path d={svgPaths.p294eab80} fill="#053FE7" />
          <path d={svgPaths.pbaf7a00} fill="#053FE7" />
          <path d={svgPaths.p20054b00} fill="#053FE7" />
          <path d={svgPaths.p113a0f80} fill="#053FE7" />
          <path d={svgPaths.pe6b5c80} fill="#053FE7" />
          <path d={svgPaths.p15563a80} fill="#053FE7" />
          <path d={svgPaths.p35cd5400} fill="#053FE7" />
          <path d={svgPaths.p9de900} fill="#053FE7" />
          <path d={svgPaths.p16f4b500} fill="#053FE7" />
          <path d={svgPaths.p206a71b0} fill="#053FE7" />
          <path d={svgPaths.p11e28280} fill="#053FE7" />
          <path d={svgPaths.p3932900} fill="#053FE7" />
          <path d={svgPaths.p143b6800} fill="#053FE7" />
          <path d={svgPaths.p2e6de000} fill="#053FE7" />
          <path d={svgPaths.p1df31672} fill="#053FE7" />
          <path d={svgPaths.p398bb700} fill="#053FE7" />
          <path d={svgPaths.pdf93780} fill="#053FE7" />
          <path d={svgPaths.p304c3200} fill="#053FE7" />
          <path d={svgPaths.p107a8b00} fill="#053FE7" />
          <path d={svgPaths.p171d1600} fill="#053FE7" />
          <path d={svgPaths.pc574980} fill="#053FE7" />
          <path d={svgPaths.p3438ee00} fill="#053FE7" />
          <path d={svgPaths.p6bf2e00} fill="#053FE7" />
          <path d={svgPaths.p1f852180} fill="#053FE7" />
          <path d={svgPaths.p2cb2ff80} fill="#053FE7" />
          <path d={svgPaths.p32dfee00} fill="#053FE7" />
          <path d={svgPaths.p35a44cc0} fill="#053FE7" />
          <path d={svgPaths.p19067d00} fill="#053FE7" />
          <path d={svgPaths.pb6a00} fill="#053FE7" />
          <path d={svgPaths.p181ff400} fill="#053FE7" />
          <path d={svgPaths.p2ab3af0} fill="#053FE7" />
          <path d={svgPaths.p2e19d080} fill="#053FE7" />
          <path d={svgPaths.p2deebc0} fill="#053FE7" />
          <path d={svgPaths.p25318400} fill="#053FE7" />
          <path d={svgPaths.p4310900} fill="#053FE7" />
          <path d={svgPaths.p2c5b9c80} fill="#053FE7" />
          <path d={svgPaths.p1c1ed000} fill="#053FE7" />
          <path d={svgPaths.p2ccb3980} fill="#053FE7" />
          <path d={svgPaths.p12a38800} fill="#053FE7" />
          <path d={svgPaths.p2d76f900} fill="#053FE7" />
          <path d={svgPaths.p9de8b0} fill="#053FE7" />
          <path d={svgPaths.p39980ff0} fill="#053FE7" />
          <path d={svgPaths.pdff9500} fill="#053FE7" />
          <path d={svgPaths.p2ce13f00} fill="#053FE7" />
        </g>
        <defs>
          <clipPath id="clip0_1_89">
            <rect fill="white" height="42.4939" width="130.181" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhiteLogo() {
  return (
    <div className="h-[42.494px] relative shrink-0 w-[130.181px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 43">
        <g clipPath="url(#clip0_1_3)">
          <path d={svgPaths.p3fa57600} fill="white" />
          <path d={svgPaths.p16589780} fill="white" />
          <path d={svgPaths.p3cd29600} fill="white" />
          <path d={svgPaths.p2383b100} fill="white" />
          <path d={svgPaths.pd10e880} fill="white" />
          <path d={svgPaths.p294eab80} fill="white" />
          <path d={svgPaths.pbaf7a00} fill="white" />
          <path d={svgPaths.p20054b00} fill="white" />
          <path d={svgPaths.p113a0f80} fill="white" />
          <path d={svgPaths.pe6b5c80} fill="white" />
          <path d={svgPaths.p15563a80} fill="white" />
          <path d={svgPaths.p35cd5400} fill="white" />
          <path d={svgPaths.p9de900} fill="white" />
          <path d={svgPaths.p16f4b500} fill="white" />
          <path d={svgPaths.p206a71b0} fill="white" />
          <path d={svgPaths.p11e28280} fill="white" />
          <path d={svgPaths.p3932900} fill="white" />
          <path d={svgPaths.p143b6800} fill="white" />
          <path d={svgPaths.p2e6de000} fill="white" />
          <path d={svgPaths.p1df31672} fill="white" />
          <path d={svgPaths.p398bb700} fill="white" />
          <path d={svgPaths.pdf93780} fill="white" />
          <path d={svgPaths.p304c3200} fill="white" />
          <path d={svgPaths.p107a8b00} fill="white" />
          <path d={svgPaths.p171d1600} fill="white" />
          <path d={svgPaths.pc574980} fill="white" />
          <path d={svgPaths.p3438ee00} fill="white" />
          <path d={svgPaths.p6bf2e00} fill="white" />
          <path d={svgPaths.p1f852180} fill="white" />
          <path d={svgPaths.p2cb2ff80} fill="white" />
          <path d={svgPaths.p32dfee00} fill="white" />
          <path d={svgPaths.p35a44cc0} fill="white" />
          <path d={svgPaths.p19067d00} fill="white" />
          <path d={svgPaths.pb6a00} fill="white" />
          <path d={svgPaths.p181ff400} fill="white" />
          <path d={svgPaths.p2ab3af0} fill="white" />
          <path d={svgPaths.p2e19d080} fill="white" />
          <path d={svgPaths.p2deebc0} fill="white" />
          <path d={svgPaths.p25318400} fill="white" />
          <path d={svgPaths.p4310900} fill="white" />
          <path d={svgPaths.p2c5b9c80} fill="white" />
          <path d={svgPaths.p1c1ed000} fill="white" />
          <path d={svgPaths.p2ccb3980} fill="white" />
          <path d={svgPaths.p12a38800} fill="white" />
          <path d={svgPaths.p2d76f900} fill="white" />
          <path d={svgPaths.p9de8b0} fill="white" />
          <path d={svgPaths.p39980ff0} fill="white" />
          <path d={svgPaths.pdff9500} fill="white" />
          <path d={svgPaths.p2ce13f00} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_3">
            <rect fill="white" height="42.4939" width="130.181" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header({ onDonateClick }: { onDonateClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#who-we-are' },
    { label: 'Spending', href: '#spending' },
    { label: 'Disbursement', href: '#disbursement' },
    { label: 'Governance', href: '#governance' },
    /*{ label: 'Withdrawal Plan', href: '#withdrawal' },*/
    { label: 'Our Promise', href: '#donor-promise' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/90'} backdrop-blur-sm`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-neutral-950 hover:text-[#053fe7] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button onClick={onDonateClick} className="bg-[#053fe7] text-white px-4 py-2 rounded-lg hover:bg-[#042ec4] transition-colors duration-200">
              Donate
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-2 text-neutral-950 hover:text-[#053fe7] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button onClick={onDonateClick} className="w-full bg-[#053fe7] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#042ec4] transition-colors duration-200">
              Donate Now
            </button>
          </nav>
        )}
      </div>
      <div className="absolute border-b border-[rgba(0,0,0,0.1)] inset-x-0 bottom-0 pointer-events-none" />
    </header>
  );
}

function HeroSection({ onDonateClick }: { onDonateClick: () => void }) {
  return (
    <section className="relative min-h-[600px] md:min-h-[715px] flex items-center justify-center px-4 sm:px-6 lg:px-24 py-16 md:py-32">
      <img
        alt="Hurricane affected area"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/Hero-IMG-min.png"
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-[#053fe7]/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-white">
          <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-2xl pointer-events-none" src="/Card-Bg-min.png" />
          <div className="relative z-10">
            <h1 className="mb-4 text-[36px] font-bold">Jamaica's recovery from Hurricane Melissa</h1>
            <p className="mb-8">
              Hurricane Melissa has left families, small businesses, and entire communities across Jamaica facing urgent needs—food, clean water, basic medical supplies, temporary shelter, and help restarting livelihoods. This fund is designed to deliver fast, accountable relief to those most affected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onDonateClick} className="bg-white text-neutral-950 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Donate Now
              </button>
          
            </div>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-[#101828] mb-3 text-[32px] font-bold">Who we are</h2>
              <p className="text-[#4a5565]">
                This is a campaign on behalf of Mayberry Investments Limited (MIL). Mayberry is a Jamaican investment firm that has served clients and communities island-wide for 40 years. We are coordinating this effort as part of our ongoing commitment to national recovery and community resilience.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#101828] mb-3">Where we're from</h3>
              <p className="text-[#4a5565]">
                We are based in Kingston, Jamaica, with clients, partners, and staff across the island. We are raising funds for vulnerable households in the hardest-hit communities.
              </p>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img
              alt="Emergency response team in action"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="/Who-we-are-IMG-min.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SpendingSection() {
  return (
    <section id="spending" className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-20">
      <div className="absolute inset-0 bg-[#053fe7]" />
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" src="/funds-BG-min.png"/>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-50 mb-3 text-[32px] font-bold">How funds will be spent</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Every dollar will go to direct relief or documented program delivery costs. Our current allocation plan is:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-[#0096da] text-5xl mb-2">95%</div>
              <h3 className="text-[#101828] mb-4">Emergency Essentials</h3>
              <p className="text-[#4a5565]">
                food packages, water, hygiene kits, baby supplies, basic medications.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="text-[#0096da] text-5xl mb-2">5%</div>
              <h3 className="text-[#101828] mb-4">Program Delivery & Audit</h3>
              <p className="text-[#4a5565]">
                bank transfer fees, field logistics, and independent verification/summary reporting. No salaries or overhead for fundraising/marketing will be paid from donations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DisbursementSection() {
  return (
    <section id="disbursement" className="bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              alt="Emergency response team in action"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="/Disbursement-IMG-min.png"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[#101828] mb-3 text-[32px] font-bold">Disbursement caps & controls</h2>
            <p className="text-[#4a5565]">
              All material purchases prioritized via direct vendor payments whenever possible to reduce misuse risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceIcon1() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 78 68">
      <path d={svgPaths.p313f3900} fill="white" />
      <path d={svgPaths.p8bece00} fill="white" />
      <path d={svgPaths.p1becbe00} fill="white" />
      <path d={svgPaths.p2c573200} fill="white" />
      <path d={svgPaths.pd9c0b00} fill="white" />
    </svg>
  );
}

function GovernanceIcon2() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 77 77">
      <path d={svgPaths.p1c582300} fill="white" />
      <path d={svgPaths.p59c4b30} fill="white" />
      <path d={svgPaths.p1f63fb00} fill="white" />
    </svg>
  );
}

function GovernanceIcon3() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 77 82">
      <path d={svgPaths.p175763c0} fill="white" />
      <path d={svgPaths.p28b95180} fill="white" />
      <path d={svgPaths.p1bdbf200} fill="white" />
      <path d={svgPaths.p1b24f000} fill="white" />
    </svg>
  );
}

function GovernanceIcon4() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 77 77">
      <path d={svgPaths.p33ceb280} fill="white" />
      <path d={svgPaths.paa58b80} fill="white" />
      <path d={svgPaths.p146d5980} fill="white" />
      <path d={svgPaths.p2f43c400} fill="white" />
      <path d={svgPaths.p32ff9700} fill="white" />
      <path d={svgPaths.p3f570600} fill="white" />
      <path d={svgPaths.p33e203f0} fill="white" />
    </svg>
  );
}

function GovernanceIcon5() {
  return (
    <svg className="w-14 h-16 md:w-16 md:h-18" fill="none" viewBox="0 0 55 71">
      <path d={svgPaths.pa72100} fill="white" />
      <path d={svgPaths.p34fd6d00} fill="white" />
      <path d={svgPaths.p3fa92800} fill="white" />
      <path d={svgPaths.p302d4780} fill="white" />
      <path d={svgPaths.p3fd2c900} fill="white" />
      <path d={svgPaths.p150f8f00} fill="white" />
    </svg>
  );
}

function GovernanceSection() {
  const cards = [
    {
      icon: <GovernanceIcon1 />,
      title: 'Relief Committee',
      description: '(3–5 members) cross-functional team from Mayberry (Risk/Compliance, Finance, CSR) to review applications, approve disbursements, and maintain records.'
    },
    {
      icon: <GovernanceIcon2 />,
      title: 'Surplus funds',
      description: 'Any surplus after immediate relief will support medium-term recovery for the same beneficiary groups (e.g., additional school or repair grants). If that is not feasible, we will donate the balance to a reputable Jamaica-based disaster-relief'
    },
    {
      icon: <GovernanceIcon3 />,
      title: 'Public Reporting',
      description: 'We will post weekly updates on this GoFundMe page summarizing amounts raised, disbursed, categories, and anonymized beneficiary counts. A final summary report will be posted when distribution concludes.'
    },
    {
      icon: <GovernanceIcon4 />,
      title: 'Dual Authorization',
      description: 'Two sign-offs required for every grant or vendor payment.'
    },
    {
      icon: <GovernanceIcon5 />,
      title: 'Documentation',
      description: 'Receipts, photos (where practical), beneficiary acknowledgments, and vendor invoices retained for audit.'
    }
  ];

  return (
    <section id="governance" className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#101828] mb-3 text-[32px] font-bold">Governance, verification & accountability</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#053fe7] rounded-2xl p-6 border border-[rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-2xl pointer-events-none" src="/Card-Bg-min.png" />
              <div className="relative z-10">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-[#75d4f6] mb-3">{card.title}</h3>
                <p className="text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WithdrawalSection() {
  return (
    <section id="withdrawal" className="relative py-12 md:py-32 px-4 sm:px-6 lg:px-24">
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/plan-IMG-min.png"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-neutral-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-[#101828] mb-3 text-[32px] font-bold">Withdrawal plan</h2>
          <p className="text-[#101828]">
            Organizer & Withdrawals: Funds from GoFundMe will be withdrawn by Mayberry Investments Limited (Organizer) solely for the purposes stated above. Disbursements to beneficiaries and vendors will follow the committee controls outlined. All transfers will be recorded and summarized in public updates.
          </p>
        </div>

        <div id="donor-promise" className="bg-neutral-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-[#101828] mb-3 text-[32px] font-bold">Our commitment to donors</h2>
          <p className="text-[#101828] mb-4">
            We understand GoFundMe's policy that funds must be used exactly as described. We welcome questions and will keep donors informed with timely updates, photos (with consent), and category-level summaries. Thank you for standing with Jamaica and helping families,
          </p>
          <p className="text-[#101828]">
            students, and small businesses rebuild—safely, transparently, and with dignity.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#053fe7] py-12 md:py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-[#364153] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white text-center md:text-left">
              Copyright 1985 - 2025 Mayberry Investments Limited
            </p>
            <WhiteLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonateClick = () => {
    setIsDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onDonateClick={handleDonateClick} />
      <main className="pt-[73px]">
        <HeroSection onDonateClick={handleDonateClick} />
        <WhoWeAreSection />
        <SpendingSection />
        <DisbursementSection />
        <GovernanceSection />
        <WithdrawalSection />
      </main>
      <Footer />
      <DonateModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
    </div>
  );
}
