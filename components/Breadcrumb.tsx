import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems = [
    { label: 'Anasayfa', href: '/' },
    ...items,
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://koskdugunsalonu.com${item.href === '/' ? '' : item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Sayfa Gezinmesi" className={styles.breadcrumbNav}>
        <div className="container">
          <ol className={styles.breadcrumbList}>
            {fullItems.map((item, index) => {
              const isLast = index === fullItems.length - 1;
              return (
                <li key={index} className={styles.breadcrumbItem}>
                  {index > 0 && (
                    <ChevronRight size={13} className={styles.separator} aria-hidden="true" />
                  )}
                  {isLast || !item.href ? (
                    <span className={styles.breadcrumbCurrent} aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className={styles.breadcrumbLink}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
