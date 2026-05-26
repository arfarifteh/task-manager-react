import { useMemo, useState } from 'react';
import { arc, pie } from 'd3-shape';
import { Box, Typography } from '@mui/material';
import type { PieArcDatum } from 'd3-shape';

export interface FcDonutSegment {
  label: string;
  value: number;
  color: string;
}

export interface FcDonutChartProps {
  data: FcDonutSegment[];
  size?: number;
  thickness?: number;
  showLegend?: boolean;
}

const DEFAULT_SIZE = 200;

const DEFAULT_THICKNESS = 40;

const HOVER_EXPAND = 8;

function useDonutArcs(
  data: FcDonutSegment[],
  size: number,
  thickness: number,
  activeLabel: string | null
) {
  return useMemo(() => {
    const radius = size / 2;

    const pieGen = pie<FcDonutSegment>()
      .value(d => d.value)
      .sort(null);

    const normalArc = arc<PieArcDatum<FcDonutSegment>>()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    const hoverArc = arc<PieArcDatum<FcDonutSegment>>()
      .innerRadius(radius - thickness)
      .outerRadius(radius + HOVER_EXPAND);

    return pieGen(data).map(d => ({
      path: (d.data.label === activeLabel ? hoverArc(d) : normalArc(d)) ?? '',
      color: d.data.color,
      label: d.data.label,
      value: d.data.value,
    }));
  }, [data, size, thickness, activeLabel]);
}

interface DonutLegendProps {
  arcs: { label: string; value: number; color: string }[];
  hovered: string | null;
  onHover: (label: string | null) => void;
}

function DonutLegend({ arcs, hovered, onHover }: DonutLegendProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
      {arcs.map(a => (
        <Box
          key={a.label}
          onMouseEnter={() => onHover(a.label)}
          onMouseLeave={() => onHover(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'default',
            opacity: hovered && hovered !== a.label ? 0.4 : 1,
            transition: 'opacity 0.15s',
          }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: a.color,
            }}
          />
          <Typography variant="body2">{a.label}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: 'auto' }}>
            {a.value}%
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function DonutCenter({ segment }: { segment: FcDonutSegment | null }) {
  if (!segment) return null;

  return (
    <>
      <text textAnchor="middle" dy="-0.3em" fontSize={11} fill="currentColor">
        {segment.label}
      </text>
      <text
        textAnchor="middle"
        dy="1.2em"
        fontSize={16}
        fontWeight="bold"
        fill={segment.color}>
        {segment.value}%
      </text>
    </>
  );
}

export function FcDonutChart({
  data,
  size = DEFAULT_SIZE,
  thickness = DEFAULT_THICKNESS,
  showLegend = false,
}: FcDonutChartProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const arcs = useDonutArcs(data, size, thickness, hovered);

  const center = size / 2;

  const pad = HOVER_EXPAND;

  const activeSegment = hovered
    ? (data.find(d => d.label === hovered) ?? null)
    : null;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <svg
          width={size}
          height={size}
          viewBox={`${-pad} ${-pad} ${size + pad * 2} ${size + pad * 2}`}>
          <g transform={`translate(${center},${center})`}>
            {arcs.map(a => (
              <path
                key={a.label}
                d={a.path}
                fill={a.color}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(a.label)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
            <DonutCenter segment={activeSegment} />
          </g>
        </svg>
      </Box>
      {showLegend && (
        <DonutLegend arcs={arcs} hovered={hovered} onHover={setHovered} />
      )}
    </Box>
  );
}
