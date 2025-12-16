// import { Chip } from "@nextui-org/react";
import { getTranslations } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resume' });

  return (
    <div className="flex flex-col print:mt-0 print:border-b-0 sm:mt-3 sm:border sm:border-bitcoin-gray">
      <div className="w-full px-4 py-6 bg-bitcoin-gray text-white flex flex-col gap-4">
        <h1>{t('name')}</h1>
        <h2>{t('jobTitle')}</h2>
      </div>
      <div className="flex flex-wrap-reverse pl-1">
        <div className="flex flex-col flex-1 gap-4 sm:mr-4 mt-4 px-4 sm:px-0 print:pl-4">
          <div className="flex flex-col gap-4">
            <div>
              <h3>{t('overview')}</h3>
              <hr />
            </div>
            <div className="flex">
              <div>
                {t('overviewText')}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h3>{t('workExperience')}</h3>
              <hr />
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.doormath.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.doormath.title')}</h4>
                <h5>{t('jobs.doormath.company')} ({t('jobs.doormath.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.doormath.description1')}</li>
                  <li>{t('jobs.doormath.description2')}</li>
                  <li>{t('jobs.doormath.description3')}</li>
                  <li>{t('jobs.doormath.description4')}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.fastaf.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.fastaf.title')}</h4>
                <h5>{t('jobs.fastaf.company')} ({t('jobs.fastaf.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.fastaf.description1')}</li>
                  <li>{t('jobs.fastaf.description2')}</li>
                  <li>{t('jobs.fastaf.description3')}</li>
                  <li>{t('jobs.fastaf.description4')}</li>
                </ul>
              </div>
            </div>
            <div className="flex break-before-page">
              <div className="w-24">
                <h5>{t('jobs.ticketmaster1.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.ticketmaster1.title')}</h4>
                <h5>{t('jobs.ticketmaster1.company')} ({t('jobs.ticketmaster1.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.ticketmaster1.description1')}</li>
                  <li>{t('jobs.ticketmaster1.description2')}</li>
                  <li>{t('jobs.ticketmaster1.description3')}</li>
                  <li>{t('jobs.ticketmaster1.description4')}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.asurion.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.asurion.title')}</h4>
                <h5>{t('jobs.asurion.company')} ({t('jobs.asurion.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.asurion.description1')}</li>
                  <li>{t('jobs.asurion.description2')}</li>
                  <li>{t('jobs.asurion.description3')}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.ticketmaster2.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.ticketmaster2.title')}</h4>
                <h5>{t('jobs.ticketmaster2.company')} ({t('jobs.ticketmaster2.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.ticketmaster2.description1')}</li>
                  <li>{t('jobs.ticketmaster2.description2')}</li>
                  <li>{t('jobs.ticketmaster2.description3')}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.balihoo.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.balihoo.title')}</h4>
                <h5>{t('jobs.balihoo.company')} ({t('jobs.balihoo.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.balihoo.description1')}</li>
                  <li>{t('jobs.balihoo.description2')}</li>
                  <li>{t('jobs.balihoo.description3')}</li>
                </ul>
              </div>
            </div>
            <div className="flex break-before-page">
              <div className="w-24">
                <h5>{t('jobs.ticketmaster3.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.ticketmaster3.title')}</h4>
                <h5>{t('jobs.ticketmaster3.company')} ({t('jobs.ticketmaster3.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.ticketmaster3.description1')}</li>
                  <li>{t('jobs.ticketmaster3.description2')}</li>
                  <li>{t('jobs.ticketmaster3.description3')}</li>
                  <li>{t('jobs.ticketmaster3.description4')}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>{t('jobs.laval.period')}</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>{t('jobs.laval.title')}</h4>
                <h5>{t('jobs.laval.company')} ({t('jobs.laval.location')})</h5>
                <ul className="m-3 list-disc">
                  <li>{t('jobs.laval.description1')}</li>
                  <li>{t('jobs.laval.description2')}</li>
                  <li>{t('jobs.laval.description3')}</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3>{t('education')}</h3>
                <hr />
              </div>
              <div className="flex">
                <div className="w-24">
                  <h5>2004-09 - 2008-09</h5>
                </div>
                <div className="flex flex-col items-center">
                  <section className="w-full flex flex-col">
                    <h4>
                      {t('educationDegree')}
                    </h4>
                    <h5>{t('educationSchool')}</h5>
                    <ul className="mx-5 my-2 text-sm list-disc">
                      <li>
                        {t('educationLab')}
                      </li>
                      <li>
                        {t('educationAward')}
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 sm:px-4 py-4 flex flex-col sm:w-64 print:w-56 gap-4 bg-slate-700/5">
          <div>
            <div>
              <h3>{t('contact')}</h3>
              <hr />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h4>{t('address')}</h4>
                <a>{t('addressValue')}</a>
              </div>
              <div>
                <h4>{t('phone')}</h4>
                <a href="tel:+14189035365">{t('phoneValue')}</a>
              </div>
              <div>
                <h4>{t('email')}</h4>
                <a href="mailto:jp305@pm.me">{t('emailValue')}</a>
              </div>
              <div>
                <h4>{t('linkedin')}</h4>
                <a href="https://www.linkedin.com/in/jp305">{t('linkedinValue')}</a>
              </div>
              <div>
                <h4>{t('github')}</h4>
                <a href="https://www.github.com/jp30566347">{t('githubValue')}</a>
              </div>
              <div>
                <h4>{t('website')}</h4>
                <a href="https://www.jpmelanson.info/portfolio">{t('websiteValue')}</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>{t('skills')}</h3>
              <hr />
            </div>
            <div className="flex flex-wrap gap-1 m-1 mt-4">
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillJavascript')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillTypescript')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillReact')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillNextjs')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillReactNative')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillPostgres')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillAWS')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillGitHub')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillSystemDesign')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('skillCodeArchitecture')}</span>
            </div>
          </div>
          <div>
            <div>
              <h3>{t('languages')}</h3>
              <hr />
            </div>
            <div className="flex flex-wrap gap-1 m-1 mt-4">
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('languageFrench')}</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">{t('languageEnglish')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
