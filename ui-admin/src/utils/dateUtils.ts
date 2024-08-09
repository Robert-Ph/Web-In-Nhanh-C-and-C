// ui-admin/src/utils/dateUtils.ts
import { format } from 'date-fns';

/**
 * Utility function to format a date string to a more readable format.
 * @param dateStr - The date string to format.
 * @returns Formatted date string in the format 'dd/MM/yyyy HH:mm:ss'
 */
export const formatDateTime = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    return format(new Date(dateStr), 'dd/MM/yyyy HH:mm:ss');
};
