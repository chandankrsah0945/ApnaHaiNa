import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { getServiceItem, serviceItems } from "@/components/services/serviceData";
import { heroTrustBadges } from "@/components/shared/companyMetrics";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return serviceItems.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Services`,
    description: `${service.title} for businesses in Gurgaon, India. ${service.priceFrom}. ${service.deliveryTimeline}.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = getServiceItem(slug).icon;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="hero-panel rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
                  Service Overview
                </p>

                <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                  {service.title}
                </h1>

                <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                  {service.description} We build delivery-ready solutions for
                  startups, agencies and teams looking for secure execution and
                  premium product quality.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Start Your Project
                  </Link>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/85 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:text-cyan-100"
                  >
                    Book a Consultation
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {heroTrustBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100"
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid w-full max-w-sm gap-4">
                <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_50px_rgba(2,6,23,0.22)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
                      <ServiceIcon aria-hidden="true" className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                        Starting Point
                      </p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {service.priceFrom}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_50px_rgba(2,6,23,0.22)]">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                    Typical Delivery
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-cyan-200">
                    {service.deliveryTimeline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-cyan-300">
                Delivery Approach
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Discovery, design, build and launch with a security-first,
                conversion-aware product process.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-cyan-300">
                Built for India
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Ideal for businesses in Gurgaon and across India looking for a
                premium AI Development Company, Cyber Security Company or Web
                Development Agency.
              </p>
            </article>

            <article className="rounded-[2rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_20px_50px_rgba(2,6,23,0.26)] backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-cyan-300">
                Best For
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Startups, growing teams and modern brands that want credible,
                conversion-focused digital products with clear delivery.
              </p>
            </article>
          </section>

          <div className="mt-12">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:translate-x-1 hover:text-cyan-100"
            >
              <FaArrowLeft aria-hidden="true" className="text-xs" />
              <span>Back To Services</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
