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
      <div className="w-full px-6 sm:px-8 py-8 bg-primary-800 text-white flex flex-col gap-2">
        <h1 className="text-white">{t('name')}</h1>
        <h2 className="text-accent-light font-normal">{t('jobTitle')}</h2>
      </div>

      <div className="flex flex-col sm:flex-row-reverse print:flex-row">
        {/* Sidebar */}
        <div className="px-6 sm:px-6 py-6 sm:py-8 flex flex-col sm:w-80 print:w-64 gap-8 bg-primary-50 border-t sm:border-t-0 sm:border-l border-primary-200">
          {/* Contact */}
          <div>
            <h3 className="mb-3 text-primary-900">{t('contact')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('address')}</h4>
                  <a className="text-sm text-primary-600">{t('addressValue')}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('phone')}</h4>
                  <a href="tel:+14189035365" className="text-sm text-accent hover:text-accent-dark transition-colors">{t('phoneValue')}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('email')}</h4>
                  <a href="mailto:jp305@pm.me" className="text-sm text-accent hover:text-accent-dark transition-colors break-all">{t('emailValue')}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('linkedin')}</h4>
                  <a href="https://www.linkedin.com/in/jp305" target="_blank" className="text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
                    {t('linkedinValue')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('github')}</h4>
                  <a href="https://www.github.com/jp30566347" target="_blank" className="text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
                    {t('githubValue')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-700 mb-1">{t('website')}</h4>
                  <a href="https://www.jpmelanson.info/portfolio" target="_blank" className="text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
                    {t('websiteValue')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 text-primary-900">{t('skills')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillJavascript')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillTypescript')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillReact')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillNextjs')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillReactNative')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillPostgres')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillAWS')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillGitHub')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillSystemDesign')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('skillCodeArchitecture')}</span>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-3 text-primary-900">{t('languages')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('languageFrench')}</span>
              <span className="px-3 py-1.5 text-xs font-medium bg-white border border-primary-200 text-primary-700 rounded-lg">{t('languageEnglish')}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-8 sm:gap-10 px-6 sm:px-8 py-6 sm:py-8 print:pl-8">
          {/* Overview */}
          <section>
            <h3 className="mb-3 text-primary-900">{t('overview')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
            <p className="text-primary-700 leading-relaxed">
              {t('overviewText')}
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h3 className="mb-3 text-primary-900">{t('workExperience')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-6"></div>
            <div className="space-y-8">
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
                  <div key={jobKey} className={`flex gap-6 ${index === 2 || index === 5 ? 'print:break-before-page' : ''}`}>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-white shadow-md mt-1"></div>
                      {index < jobs.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-200 min-h-[60px] mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="mb-2">
                        <h4 className="text-primary-900 mb-1">{title}</h4>
                        <h5 className="text-accent font-semibold">{company} <span className="text-primary-600 font-normal">({location})</span></h5>
                        <h6 className="text-primary-600 text-sm mt-1">{period}</h6>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-primary-700 ml-2">
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
            <h3 className="mb-3 text-primary-900">{t('education')}</h3>
            <div className="h-1 w-12 bg-accent rounded-full mb-6"></div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-white shadow-md mt-1"></div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h5 className="text-primary-600 text-sm mb-2">2004-09 - 2008-09</h5>
                  <h4 className="text-primary-900 mb-1">{t('educationDegree')}</h4>
                  <h5 className="text-accent font-semibold">{t('educationSchool')}</h5>
                </div>
                <ul className="list-disc list-inside space-y-1 text-primary-700 ml-2 text-sm">
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
