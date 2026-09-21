import React from 'react';
import { motion } from 'motion/react';
import { Engagement } from './SelectedEngagementsSection';

export interface AdditionalEngagementItem {
  id: string;
  title: string;
  quote: string;
  deliverables: string;
  tags: string;
  fullEngagement: Engagement;
}

export const ADDITIONAL_ENGAGEMENTS: AdditionalEngagementItem[] = [
  {
    id: 'municipal-financing-transformation-bangladesh',
    title: 'Municipal Financing Institution Transformation, Bangladesh',
    quote: 'Client: government municipal development fund. Challenge: modernize a municipal financing entity to access capital markets. Role: institutional diagnostic, operating model, financing road map.',
    deliverables: 'Deliverables: transformation road map, PFM strengthening plan, capital-market access strategy. Result: [verify before publishing any bond figure].',
    tags: 'Institutional Reform · Development Finance · PFM',
    fullEngagement: {
      id: 'municipal-financing-transformation-bangladesh',
      title: 'Municipal Financing Institution Transformation, Bangladesh',
      subtitle: 'Modernizing Municipal Finance to Access Capital Markets',
      summary: 'Institutional modernization and operating model restructuring for a government municipal development fund to access domestic and international capital markets.',
      badgeLabel: 'Municipal Finance',
      badgeColor: 'teal',
      clientType: 'Government Municipal Development Fund',
      sector: 'Municipal Finance & Capital Markets',
      region: 'South Asia / Bangladesh',
      completionYear: '2024',
      capitalValue: 'Pending Verification',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Modernize a municipal financing entity to access capital markets and scale municipal infrastructure financing.',
      ip3Role: 'Institutional diagnostic, operating model, financing road map.',
      deliverables: [
        'Transformation road map',
        'PFM strengthening plan',
        'Capital-market access strategy'
      ],
      result: 'Diagnostic and operating model delivered. [verify before publishing any bond figure].',
      verificationSource: 'Government Municipal Development Fund Audit Review',
      capabilityTags: ['Institutional Reform', 'Development Finance', 'PFM'],
      metrics: [
        { label: 'Reform Scope', value: 'National', context: 'Municipal Development Fund' },
        { label: 'PFM Roadmap', value: 'Completed', context: 'Diagnostic & Operating Model' },
        { label: 'Market Access', value: 'Phase 2', context: 'Capital-market preparation' }
      ]
    }
  },
  {
    id: 'national-digital-identity-civil-registry',
    title: 'National Digital Identity & Civil Registry Interoperability',
    quote: 'Client: UNDP / government. Challenge: fragmented registries blocking integrated social-protection delivery. Role: interoperability and data-governance architecture.',
    deliverables: 'Deliverables: interoperability blueprint, data governance & privacy framework, implementation road map. Result: [verify].',
    tags: 'Digital Government · Data Governance',
    fullEngagement: {
      id: 'national-digital-identity-civil-registry',
      title: 'National Digital Identity & Civil Registry Interoperability',
      subtitle: 'Data-Governance Architecture & Interoperability Blueprint',
      summary: 'Interoperability and data-governance architecture connecting fragmented civil registries to support unified social-protection delivery.',
      badgeLabel: 'Digital Government',
      badgeColor: 'teal',
      clientType: 'UNDP / Government',
      sector: 'Digital Government & Civil Registry',
      region: 'Global / National Government',
      completionYear: '2024',
      capitalValue: 'Institutional Concession',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Fragmented registries blocking integrated social-protection delivery.',
      ip3Role: 'Interoperability and data-governance architecture.',
      deliverables: [
        'Interoperability blueprint',
        'Data governance & privacy framework',
        'Implementation road map'
      ],
      result: 'Interoperability blueprint and privacy statutory framework delivered. [verify].',
      verificationSource: 'UNDP Joint Technical Review',
      capabilityTags: ['Digital Government', 'Data Governance', 'Civil Registry'],
      metrics: [
        { label: 'System Integration', value: 'Unified', context: 'Registry Interoperability' },
        { label: 'Governance', value: 'Endorsed', context: 'Privacy Statutory Framework' },
        { label: 'Targeting', value: 'High-Impact', context: 'Social Protection Delivery' }
      ]
    }
  },
  {
    id: 'secondary-stem-tvet-curriculum-modernization',
    title: 'Secondary STEM & TVET Curriculum Modernization',
    quote: 'Client: UNESCO / GPE / government. Challenge: curriculum misaligned with labor-market and climate-era skills. Role: curriculum reform design, teacher accreditation model.',
    deliverables: 'Deliverables: curriculum framework, modular accreditation system, implementation plan. Result: [verify].',
    tags: 'Education Policy · Institutional Reform · MEL',
    fullEngagement: {
      id: 'secondary-stem-tvet-curriculum-modernization',
      title: 'Secondary STEM & TVET Curriculum Modernization',
      subtitle: 'Curriculum Reform Design & Modular Accreditation Model',
      summary: 'Modernizing secondary STEM and vocational curricula aligned to real labor-market and climate-era industrial needs, coupled with teacher accreditation.',
      badgeLabel: 'Education Policy',
      badgeColor: 'teal',
      clientType: 'UNESCO / GPE / Government',
      sector: 'Education Policy & Human Capital',
      region: 'Global / National Ministry of Education',
      completionYear: '2024',
      capitalValue: 'Multilateral Reform',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      challenge: 'Curriculum misaligned with labor-market and climate-era skills.',
      ip3Role: 'Curriculum reform design, teacher accreditation model.',
      deliverables: [
        'Curriculum framework',
        'Modular accreditation system',
        'Implementation plan'
      ],
      result: 'Curriculum framework and modular accreditation model completed. [verify].',
      verificationSource: 'UNESCO / GPE Program Evaluation',
      capabilityTags: ['Education Policy', 'Institutional Reform', 'MEL'],
      metrics: [
        { label: 'Curriculum Scope', value: 'STEM & TVET', context: 'Secondary & Technical' },
        { label: 'Accreditation', value: 'Modular', context: 'Teacher Certification' },
        { label: 'Implementation', value: 'Phased', context: 'National Rollout Plan' }
      ]
    }
  }
];

export interface InstitutionalEngagementsSectionProps {
  className?: string;
}

export default function InstitutionalEngagementsSection({
  className = '',
}: InstitutionalEngagementsSectionProps) {
  return (
    <div id="institutional-engagements-pipeline-wrapper" className={`w-full ${className}`}>
      {/* Section Eyebrow / Heading */}
      <div className="w-full max-w-5xl mx-auto pt-8 sm:pt-10 pb-3 flex items-center justify-between border-t border-slate-800/80">
        <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase block">
          INSTITUTIONAL ADVISORY & REFORM PIPELINE
        </span>
      </div>

      {/* Styled container matching div#sector-systems-items-container exactly without hover */}
      <div
        id="sector-systems-items-container-engagements"
        className="w-full max-w-5xl space-y-6 pt-4 pb-14 text-left mx-auto"
      >
        {ADDITIONAL_ENGAGEMENTS.map((item, itemIdx) => (
          <motion.p
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * itemIdx }}
            className="text-left w-full text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-200"
          >
            <strong className="font-bold text-white tracking-tight">
              {item.title}
            </strong>{' '}
            <span className="text-slate-400 font-light">—</span>{' '}
            <span className="italic text-[#38d9c0] font-medium">
              "{item.quote}"
            </span>{' '}
            <span className="text-[#38d9c0] font-bold mx-1">→</span>{' '}
            <span className="text-slate-300 font-normal">
              {item.deliverables}
            </span>
            {item.tags && (
              <span className="inline-block mt-1 sm:mt-0 sm:ml-2.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide bg-[#38d9c0]/15 text-[#38d9c0] border border-[#38d9c0]/30 align-middle">
                {item.tags}
              </span>
            )}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
