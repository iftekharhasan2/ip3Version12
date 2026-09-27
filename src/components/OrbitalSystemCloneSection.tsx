import React, { useState } from 'react';
import { OrbitalSystemCustom as OrbitalSystem } from './OrbitalSystemCustom';

export interface OrbitalSystemCloneSectionProps {
  className?: string;
}

export const OrbitalSystemCloneSection: React.FC<OrbitalSystemCloneSectionProps> = ({
  className = '',
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <section
      id="orbital-system-clone-section"
      className={`light light-section relative w-full pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-10 z-10 bg-[#f8fafc] border-t border-slate-200 text-slate-900 ${className}`}
    >
      {/* 4-card vertical layout (matching the selected element clone) */}
      <OrbitalSystem
        id="orbital-system-container-clone"
        cardCount={4}
        orientation="vertical"
        hubTitle="IP3"
        badgeLabel="BUILT FOR COMPLEXITY"
        selectedNodeId={selectedNode}
        onSelectNode={(nodeId) => {
          setSelectedNode(nodeId);
          console.log('Selected node:', nodeId);
        }}
      />
    </section>
  );
};

export default OrbitalSystemCloneSection;
