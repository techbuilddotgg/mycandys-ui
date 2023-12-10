import React, { ReactNode } from 'react';

import styles from './table.module.css';
import { classnames } from '@/utils/classnames';

export interface TableHeader<T> {
  label: string;
  key: keyof T;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T> {
  data: T[];
  headers: TableHeader<T>[];
  onRowClick?: (item: T) => void;
  classNames?: string;
  isLoading?: boolean;
  emptyStateComponent?: ReactNode;
  loadingStateComponent?: ReactNode;
}

const Table = <T,>({
  data,
  headers,
  onRowClick,
  classNames,
  isLoading,
  emptyStateComponent,
  loadingStateComponent,
}: TableProps<T>) => {
  return (
    <table className={classnames(styles.table, classNames)}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={'p-3'} align={header.align}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={' font-semibold'}>
        {isLoading ? (
          <tr>
            <td colSpan={headers.length} className={'h-32 text-center'}>
              {loadingStateComponent}
            </td>
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={headers.length} className={'h-32 text-center'}>
              {emptyStateComponent}
            </td>
          </tr>
        ) : (
          <>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={onRowClick ? () => onRowClick(item) : undefined}
                className={
                  onRowClick ? 'hover:cursor-pointer hover:bg-gray-200' : ''
                }
              >
                {headers.map((header, index) => (
                  <td key={index} className={'p-3'}>
                    {item[header.key] as ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default Table;
