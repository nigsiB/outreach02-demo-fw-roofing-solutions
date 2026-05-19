import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1683295083329-4d4738291f3a?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1683295083329-4d4738291f3a?auto=format&fit=crop&w=600&q=80", alt: "Pitched roof tiling", title: "Pitched roofs", desc: "Tile, slate, and chimney repairs with matching materials." },
  { image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80", alt: "Flat roof repair work", title: "Flat & lead", desc: "GRP, felt, and leadwork for extensions and bay windows." },
  { image: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?auto=format&fit=crop&w=600&q=80", alt: "Storm damage roof repair", title: "Storm damage", desc: "Emergency tarping and permanent repairs after high winds." },
  { image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", alt: "Roof survey inspection", title: "Surveys", desc: "Pre-purchase reports and honest advice before you commit." },
  { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80", alt: "Fascias and guttering", title: "Fascias & guttering", desc: "Replacement boards and free-flowing rainwater systems." },
];

const reviews = [
  { quote: "FW turned up after the storm and made the roof secure the same day.", name: "David C.", detail: "Storm repair" },
  { quote: "Fair quote for a full re-tile — neat finish on our Cranleigh cottage.", name: "Margaret S.", detail: "Pitched roof" },
  { quote: "Professional survey before we bought — saved us a costly surprise.", name: "Tom & Lisa", detail: "Pre-purchase" },
];

export default function Page() {
  return (
    <main>
      <section className="relative min-h-[70vh] flex items-end">
        <Image src={heroImg} alt="Roofer on pitched roof" fill className="object-cover" priority sizes="100vw" />
        <div className="relative z-10 w-full bg-gradient-to-t from-[var(--slate)] to-transparent p-8 text-white md:p-12">
          <p className="text-xs font-bold uppercase text-[var(--orange)]">Little Mead · Cranleigh · 6 days</p>
          <h1 className="font-head mt-2 text-5xl leading-none sm:text-6xl">ROOFS THAT<br />HOLD THE LINE.</h1>
          <p className="mt-4 max-w-lg text-sm text-white/80">Demo for FW Roofing — pitched, flat, and storm repairs with local proof.</p>
          <Link href="/contact" className="mt-6 inline-block bg-[var(--orange)] px-8 py-3 text-sm font-bold uppercase">
            Survey request
          </Link>
        </div>
      </section>

      <section className="section-trust border-b border-slate-300">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-head font-bold text-[var(--slate)]">Local</span> · Cranleigh &amp; villages</p>
          <p><span className="font-bold">Little Mead area</span></p>
          <p><span className="font-bold">Six days a week</span></p>
        </div>
      </section>

      <section className="section-services mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-head text-3xl text-[var(--slate)]">Services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={aboutImg} alt="Roofing repair in progress" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <h2 className="font-head text-3xl text-[var(--slate)]">Built for Surrey weather</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              FW Roofing Solutions covers pitched and flat work with storm call-outs when you need them most.
              Six-day availability keeps projects moving without the runaround.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Completed roofline"
        title="Book a roof survey"
        body="Honest assessments for homeowners and buyers. Demo site — confirm availability with FW Roofing."
        primaryHref="/contact"
        primaryLabel="Request survey"
        secondaryHref="tel:01483200001"
        secondaryLabel="Call now"
      />

      <section className="section-reviews mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-head text-3xl">Customer reviews</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="border border-slate-200 bg-white p-6">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-bold text-[var(--slate)]">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-head text-3xl">Recent projects</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src={galleryImg} alt="Tiled roof completion" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src={heroImg} alt="Flat roof work" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={aboutImg}
        imageAlt="FW Roofing team"
        title="Storm damage? Call first."
        body="Little Mead, Cranleigh — pitched, flat, and emergency tarping. Six-day service concept."
        primaryHref="tel:01483200001"
        primaryLabel="Call FW Roofing"
        secondaryHref="/contact"
        secondaryLabel="Email enquiry"
      />
    </main>
  );
}
