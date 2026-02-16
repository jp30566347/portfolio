// import { Chip } from "@nextui-org/react";
import { getTranslations } from 'next-intl/server';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Github, Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { getMessages } from '@/i18n/messages';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  let { locale } = await params;
  // Ensure that a valid locale is used, default to 'en' if not provided or invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  const t = await getTranslations({ locale, namespace: 'resume' });
  const messages = getMessages(locale);
  
  // Helper to safely get nested translation key
  const safeGet = (key: string): string | undefined => {
    const keys = key.split('.');
    let value: any = messages.resume;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return undefined;
    }
    return typeof value === 'string' ? value : undefined;
  };

  const jobs = [
    'sapien',
    'doormath',
    'fastaf',
    'ticketmaster1',
    'asurion',
    'ticketmaster2',
    'balihoo',
    'ticketmaster3',
    'laval',
  ] as const;

  return (
    <div className="flex flex-col print:mt-0 print:border-b-0 sm:mt-3 sm:border sm:border-primary-300 sm:rounded-2xl overflow-hidden shadow-soft-lg">
      {/* Header */}
      <div className="w-full px-6 sm:px-8 py-8 print:px-4 print:py-4 bg-primary-800 text-white flex flex-col gap-2 print:gap-1">
        <h1 className="text-white print:text-3xl">{t('name')}</h1>
        <h2 className="text-accent-light font-normal print:text-xl">{t('jobTitle')}</h2>
      </div>

      <div className="flex flex-col sm:flex-row-reverse print:flex-row">
        {/* Sidebar */}
        <div className="px-6 sm:px-6 py-6 sm:py-8 print:px-3 print:py-3 flex flex-col sm:w-80 print:w-52 gap-8 print:gap-4 bg-primary-50 border-t sm:border-t-0 sm:border-l border-primary-200">
          {/* Contact */}
          <div>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('contact')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-4 print:mb-2" aria-hidden="true"></div>
            <div className="flex flex-col gap-4 print:gap-2">
              <div className="flex items-start gap-3 print:gap-2">
                <MapPin className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('address')}</h4>
                  <address className="text-sm print:text-xs text-primary-600 not-italic">{t('addressValue')}</address>
                </div>
              </div>
              <div className="flex items-start gap-3 print:gap-2">
                <Phone className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('phone')}</h4>
                  <a href="tel:+14189035365" className="text-sm print:text-xs text-accent hover:text-accent-dark transition-colors">{t('phoneValue')}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 print:gap-2">
                <Mail className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('email')}</h4>
                  <a href="mailto:jp@jp305.dev" className="text-sm print:text-xs text-accent hover:text-accent-dark transition-colors break-all">{t('emailValue')}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 print:gap-2">
                <Linkedin className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('linkedin')}</h4>
                  <a href="https://www.linkedin.com/in/jp305" target="_blank" rel="noopener noreferrer" className="text-sm print:text-xs text-accent hover:text-accent-dark transition-colors flex items-center gap-1 print:gap-0.5">
                    {t('linkedinValue')}
                    <ExternalLink className="w-3 h-3 print:w-2 print:h-2" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 print:gap-2">
                <Github className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('github')}</h4>
                  <a href="https://www.github.com/jp30566347" target="_blank" rel="noopener noreferrer" className="text-sm print:text-xs text-accent hover:text-accent-dark transition-colors flex items-center gap-1 print:gap-0.5">
                    {t('githubValue')}
                    <ExternalLink className="w-3 h-3 print:w-2 print:h-2" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 print:gap-2">
                <Globe className="w-5 h-5 print:w-3 print:h-3 text-accent mt-0.5 print:mt-0 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-primary-700 mb-1 print:mb-0.5">{t('website')}</h4>
                  <a href="https://www.jpmelanson.info/portfolio" target="_blank" rel="noopener noreferrer" className="text-sm print:text-xs text-accent hover:text-accent-dark transition-colors flex items-center gap-1 print:gap-0.5">
                    {t('websiteValue')}
                    <ExternalLink className="w-3 h-3 print:w-2 print:h-2" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('skills')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-4 print:mb-2" aria-hidden="true"></div>
            <ul className="flex flex-wrap gap-2 print:gap-1 list-none">
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillJavascript')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillTypescript')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillReact')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillNextjs')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillReactNative')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillPostgres')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillAWS')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillGitHub')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillSystemDesign')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillCodeArchitecture')}</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('languages')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-4 print:mb-2" aria-hidden="true"></div>
            <ul className="flex flex-wrap gap-2 print:gap-1 list-none">
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('languageFrench')}</li>
              <li className="px-3 py-1.5 print:px-2 print:py-1 text-xs print:text-[10px] font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('languageEnglish')}</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-8 sm:gap-10 print:gap-4 px-6 sm:px-8 py-6 sm:py-8 print:px-4 print:py-3 print:pl-6">
          {/* Overview */}
          <section>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('overview')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-4 print:mb-2" aria-hidden="true"></div>
            <p className="text-primary-700 print:text-sm leading-relaxed print:leading-snug">
              {t('overviewText')}
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('workExperience')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-6 print:mb-3" aria-hidden="true"></div>
            <div className="space-y-8 print:space-y-4">
              {jobs.map((jobKey, index) => {
                const period = t(`jobs.${jobKey}.period`);
                const title = t(`jobs.${jobKey}.title`);
                const company = t(`jobs.${jobKey}.company`);
                const location = t(`jobs.${jobKey}.location`);
                // Safely get descriptions, only including keys that exist
                const descriptions: string[] = [];
                for (let i = 1; i <= 4; i++) {
                  const desc = safeGet(`jobs.${jobKey}.description${i}`);
                  if (desc) {
                    descriptions.push(desc);
                  } else {
                    // No more descriptions found, stop
                    break;
                  }
                }

                return (
                  <div key={jobKey} className={`flex gap-6 print:gap-3 print:break-inside-avoid ${index === 2 || index === 4 || index === 5 ? 'print:break-before-page' : ''}`}>
                    <div className="flex flex-col items-center" aria-hidden="true">
                      <div className="w-3 h-3 print:w-2 print:h-2 rounded-full bg-accent border-2 print:border border-white shadow-md mt-1 print:mt-0.5"></div>
                      {index < jobs.length - 1 && (
                        <div className="w-0.5 print:w-px h-full bg-primary-200 min-h-[60px] print:min-h-[40px] mt-2 print:mt-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-2 print:pb-1">
                      <div className="mb-2 print:mb-1">
                        <h4 className="text-primary-900 mb-1 print:mb-0.5 print:text-base">{title}</h4>
                        <h5 className="text-accent font-semibold print:text-sm">{company} <span className="text-primary-600 font-normal">({location})</span></h5>
                        <h6 className="text-primary-600 text-sm print:text-xs mt-1 print:mt-0.5">{period}</h6>
                      </div>
                      <ul className="list-disc list-inside space-y-2 print:space-y-1 text-primary-700 print:text-xs ml-2 print:ml-1">
                        {descriptions.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="mb-3 print:mb-1.5 text-primary-900 print:text-lg">{t('education')}</h3>
            <div className="h-1 w-12 print:h-0.5 print:w-8 bg-accent rounded-full mb-6 print:mb-3" aria-hidden="true"></div>
            <div className="flex gap-6 print:gap-3">
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="w-3 h-3 print:w-2 print:h-2 rounded-full bg-accent border-2 print:border border-white shadow-md mt-1 print:mt-0.5"></div>
              </div>
              <div className="flex-1">
                <div className="mb-2 print:mb-1">
                  <h5 className="text-primary-600 text-sm print:text-xs mb-2 print:mb-1">2004-09 - 2008-09</h5>
                  <h4 className="text-primary-900 mb-1 print:mb-0.5 print:text-base">{t('educationDegree')}</h4>
                  <h5 className="text-accent font-semibold print:text-sm">{t('educationSchool')}</h5>
                </div>
                <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-primary-700 print:text-xs ml-2 print:ml-1 text-sm">
                  <li>{t('educationLab')}</li>
                  <li>{t('educationAward')}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
