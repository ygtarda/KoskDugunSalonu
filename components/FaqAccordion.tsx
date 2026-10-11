'use strict';
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FaqAccordion.module.css';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
          >
            <button
              type="button"
              className={styles.questionButton}
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className={styles.questionText}>{item.question}</span>
              <div className={`${styles.chevronWrapper} ${isOpen ? styles.chevronOpen : ''}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}
            >
              <div className={styles.answerInner}>
                <div className={styles.answerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
