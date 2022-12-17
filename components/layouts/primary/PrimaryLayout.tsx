import Head from 'next/head';
import styles from './PrimaryLayout.module.css';
// import Footer from '../../navigation/footer/Footer';
// import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Primary Layout</title>
      </Head>
      <main className={styles.main}>{children}</main>
      {/* <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}> */}
      {/* <Header /> */}
      {/* <main className="px-5">{children}</main> */}
      {/* <div className="m-auto" /> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default PrimaryLayout;