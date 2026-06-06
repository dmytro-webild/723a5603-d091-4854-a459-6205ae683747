"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Explore Catalog",
        href: "#products",
      }}
      logoSrc="http://img.b2bpic.net/free-photo/beautiful-wall-decorated-with-roses_24972-182.jpg"
      brandName="Σογο LTD"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Your Green Oasis Starts Here"
      description="Discover Cyprus's finest nursery and garden supplies. We cultivate beauty, one plant at a time."
      testimonials={[
        {
          name: "Maria P.",
          handle: "@MariaGardens",
          testimonial: "Σογο LTD transformed my backyard into a stunning sanctuary. The plant quality is unmatched!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-florist-taking-care-flowers-blury_176420-2052.jpg",
        },
        {
          name: "Andreas K.",
          handle: "@CypriotGreen",
          testimonial: "Expert advice and an incredible selection. My olive trees have never looked better. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-woman-hides-face-with-two-orange-gerberas-likes-flowers-expresses-happiness-joy-cheerful-florist-going-make-pretty-bouquet-sell-works-flower-shop_273609-43271.jpg",
        },
        {
          name: "Elena S.",
          handle: "@EcoGardener",
          testimonial: "Their sustainable options are fantastic! I love supporting a local business that cares for the environment.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-model-standing-shiny-park_23-2147869623.jpg",
        },
        {
          name: "George L.",
          handle: "@GardenLover",
          testimonial: "The staff are so knowledgeable and friendly. They helped me choose the perfect plants for my sunny balcony.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-with-cellphone_23-2147891901.jpg",
        },
        {
          name: "Sophia M.",
          handle: "@BloomingSophia",
          testimonial: "Everything arrived in perfect condition. My garden is flourishing, thanks to Σογο LTD!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-beautiful-blond-hair-gentle-smile-dressed-green-robe-with-belt-is-working-greenhouse_197531-12323.jpg",
        },
      ]}
      tag="Cultivating Beauty"
      buttons={[
        {
          text: "Shop Our Plants",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-woman-smiling-portrait_23-2149123037.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-man-wearing-casual-black-tshirt-standing-isolated-red-background-looking-away-side-with-smile-face-natural-expression-laughing-confident_839833-32367.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-fashionable-cheerful-boy-with-brown-eyes-african-male-model-green-outfit-expressing-sincere-emotions_197531-20116.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-latin-woman-smiling-happy-standing-city_839833-8445.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-young-female-gardener-wearing-gardening-hat-holding-flower-flowerpot-head-isolated-pink-wall_141793-127682.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Trusted by 10,000+ Gardeners"
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-view-gardening-gloves-watering-can-near-fresh-flower-plants-greenhouse_23-2147948245.jpg"
      imageAlt="Lush green garden with vibrant flowers and plants"
      showDimOverlay={true}
      showBlur={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Growing Together Since 1995",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/abstract-neutral-paint-background-design_53876-129685.jpg",
          alt: "Flower icon",
        },
        {
          type: "text",
          content: " SOGO LTD has been the heart of Cyprus's gardening community.",
        },
      ]}
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Quality Plants & Seeds",
          description: "Hand-picked, healthy plants and high-germination seeds sourced from trusted growers, ensuring robust growth and beautiful blooms.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-hot-decoration-landscape-botany_1232-3748.jpg",
          imageAlt: "Assortment of healthy plants",
        },
        {
          title: "Expert Gardening Advice",
          description: "Our experienced horticulturists offer personalized guidance, helping you choose the right plants and master care techniques.",
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer-using-laptop_158595-7058.jpg",
          imageAlt: "Gardener giving advice to a customer",
        },
        {
          title: "Sustainable Practices",
          description: "Committed to eco-friendly gardening, we offer organic soils, natural fertilizers, and promote sustainable methods for a healthier planet.",
          imageSrc: "http://img.b2bpic.net/free-photo/dirt-tools_23-2148013665.jpg",
          imageAlt: "Hands working with organic soil",
        },
      ]}
      title="Premium Solutions for Every Gardener"
      description="From vibrant flora to essential tools, we provide everything you need to bring your garden dreams to life, expertly selected for the Cypriot climate."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",
          brand: "Cypriot Flora",
          name: "Young Olive Tree",
          price: "€45.00",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/path-nature-autumn_23-2147676865.jpg",
          imageAlt: "Young olive tree in a pot",
        },
        {
          id: "product-2",
          brand: "Bloom & Grow",
          name: "Vibrant Petunia Mix",
          price: "€12.50",
          rating: 4.8,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-roses-summer-antique-day_1203-4959.jpg",
          imageAlt: "Colorful petunia flowers in a pot",
        },
        {
          id: "product-3",
          brand: "GreenThumb Tools",
          name: "Ergonomic Trowel Set",
          price: "€28.00",
          rating: 4.9,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-gardening-tools-ground_23-2148200409.jpg",
          imageAlt: "Ergonomic gardening trowel",
        },
        {
          id: "product-4",
          brand: "Nature's Best",
          name: "Organic Potting Soil",
          price: "€18.99",
          rating: 5,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-gardening-objects_23-2148060667.jpg",
          imageAlt: "Bag of organic potting soil",
        },
        {
          id: "product-5",
          brand: "Terra Lux",
          name: "Modern Ceramic Planter",
          price: "€35.00",
          rating: 4.7,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-modern-plants-deco_23-2149198554.jpg",
          imageAlt: "Modern ceramic planter pot",
        },
        {
          id: "product-6",
          brand: "Rose Garden",
          name: "Classic Red Rose Bush",
          price: "€32.00",
          rating: 4.9,
          reviewCount: "115",
          imageSrc: "http://img.b2bpic.net/free-photo/plant-pot_23-2148013434.jpg",
          imageAlt: "Red rose bush in bloom",
        },
      ]}
      title="Our Exquisite Collection"
      description="Explore a diverse range of plants, trees, and garden essentials, carefully selected for the Cyprus climate and your unique needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "25+",
          title: "Years of Expertise",
          description: "Cultivating knowledge and experience in the heart of Cyprus.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-compass_23-2148503402.jpg",
          imageAlt: "Tree rings symbolizing years",
        },
        {
          id: "metric-2",
          value: "10,000+",
          title: "Happy Gardeners",
          description: "Our growing community of satisfied customers across the island.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-taking-coffee-break_329181-16507.jpg",
          imageAlt: "Group of happy gardeners",
        },
        {
          id: "metric-3",
          value: "500+",
          title: "Plant Varieties",
          description: "An extensive selection to inspire every garden, big or small.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-potted-plants-shovel_23-2148269586.jpg",
          imageAlt: "Diverse selection of plants",
        },
      ]}
      title="Our Garden of Success"
      description="Proudly serving the Cypriot community with passion and expertise, fostering growth and beauty for decades."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "testimonial-1",
          name: "Antonis Georgiou",
          handle: "Nicosia, Cyprus",
          testimonial: "The plants from Σογο LTD are always incredibly healthy. My garden has never looked so vibrant!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-taking-care-plant-outdoors_23-2149722634.jpg",
          imageAlt: "Antonis Georgiou",
        },
        {
          id: "testimonial-2",
          name: "Christina Antoniou",
          handle: "Limassol, Cyprus",
          testimonial: "Outstanding customer service and a fantastic range of tools. My landscaping project was a breeze!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-taking-care-their-plants-greenhouse_23-2149037274.jpg",
          imageAlt: "Christina Antoniou",
        },
        {
          id: "testimonial-3",
          name: "Panos Hadjipavlou",
          handle: "Paphos, Cyprus",
          testimonial: "I love that Σογο LTD focuses on sustainable options. My organic vegetable patch is thriving!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-senior-couple-having-picnic-outdoors_23-2149109376.jpg",
          imageAlt: "Panos Hadjipavlou",
        },
        {
          id: "testimonial-4",
          name: "Eleni Michael",
          handle: "Larnaca, Cyprus",
          testimonial: "From exotic flowers to common herbs, they have it all. The quality is consistently top-notch.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-blond-female-coworker-paper-sheet_23-2148180677.jpg",
          imageAlt: "Eleni Michael",
        },
        {
          id: "testimonial-5",
          name: "Stavros Demetriou",
          handle: "Famagusta, Cyprus",
          testimonial: "The staff are so knowledgeable. They helped me revive my struggling bougainvillea. True plant doctors!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-plant-tree-home_1150-7890.jpg",
          imageAlt: "Stavros Demetriou",
        },
      ]}
      showRating={true}
      title="What Our Gardeners Say"
      description="Hear from our satisfied customers who have transformed their outdoor spaces with the help of Sogo LTD's premium products and expert advice."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Do you offer delivery across Cyprus?",
          content: "Yes, we provide reliable delivery services to all major cities and rural areas across Cyprus. Delivery fees may vary based on location and order size.",
        },
        {
          id: "faq-2",
          title: "What types of plants are best for the Cypriot climate?",
          content: "We specialize in plants that thrive in the Mediterranean climate, including drought-tolerant species, olive trees, bougainvillea, citrus plants, and a variety of seasonal flowers. Our experts can help you choose the best options.",
        },
        {
          id: "faq-3",
          title: "Do you provide gardening consultations?",
          content: "Absolutely! We offer personalized gardening consultations where our horticulturists assess your space, recommend suitable plants, and provide tailored care advice. Contact us to schedule an appointment.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-gardening-items-with-copy-space_23-2148224056.jpg"
      imageAlt="Gardening tools laid out neatly"
      mediaAnimation="opacity"
      mediaPosition="left"
      title="Common Questions"
      description="Find quick answers to frequently asked questions about our products, services, and how we can help your garden flourish."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Connect With Us"
      title="Let's Grow Something Beautiful Together"
      description="Have a question, need expert advice, or ready to start your next garden project? Reach out to our dedicated team today."
      inputPlaceholder="Enter your email"
      buttonText="Get in Touch"
      termsText="By submitting, you agree to receive communications from Σογο LTD."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="http://img.b2bpic.net/free-photo/beautiful-wall-decorated-with-roses_24972-182.jpg"
      logoAlt="Σογο LTD Logo"
      logoText="Σογο LTD"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Story",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "Plants & Trees",
              href: "#products",
            },
            {
              label: "Tools & Equipment",
              href: "#products",
            },
            {
              label: "Soil & Fertilizers",
              href: "#products",
            },
            {
              label: "Accessories",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Σogo ΛΤΔ. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
