import React from 'react';
import Color from 'color';
import clsx from 'clsx';
import styles from './TimelineTitle.module.scss';

const unitsToFlamegraphTitle = {
  objects: 'Total number of objects in RAM',
  goroutines: 'Total number of goroutines',
  bytes: 'Total amount of RAM',
  samples: 'Total CPU time',
  lock_nanoseconds: 'Total time spent waiting on locks',
  lock_samples: 'Total number of contended locks',
  baseline: 'Baseline Flamegraph',
  comparison: 'Comparison Flamegraph',
  diff: 'Baseline vs. Comparison Diff',
  trace_samples: 'Total aggregated span duration',
  '': '',
};

interface TimelineTitleProps {
  color?: Color;
  titleKey?: keyof typeof unitsToFlamegraphTitle;
  className?: string;
}

export default function TimelineTitle({
  color,
  titleKey = '',
  className,
}: TimelineTitleProps) {
  return (
    <div className={clsx([styles.timelineTitle, className])}>
      {color && (
        <span
          className={styles.colorReference}
          style={{ backgroundColor: color.rgb().toString() }}
        />
      )}
      <p className={styles.title}>{unitsToFlamegraphTitle[titleKey]}</p>
    </div>
  );
}
