import enMessages from '../../messages/en.json';
import frMessages from '../../messages/fr.json';

export function getMessages(locale: string) {
  switch (locale) {
    case 'fr':
      return frMessages;
    case 'en':
    default:
      return enMessages;
  }
}
