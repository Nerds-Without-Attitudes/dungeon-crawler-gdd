import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const introDocsUrl = useBaseUrl('/docs/intro');
  const introDocsNextUrl = useBaseUrl('/docs/next/intro');
  const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  return (
    <Layout
      title={`Nerds Without Attitudes`}
      description="House for all details about the studio and games.">
      {/* Add header back once it make sense to have a proper landing page. <HomepageHeader /> */}
      {development && <Redirect to={introDocsNextUrl} />}
      {!development && <Redirect to={introDocsUrl} />}
    </Layout>
  );
}
