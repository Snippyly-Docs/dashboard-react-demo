import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import CardGrid from './components/CardGrid';
import Section from './components/Section';
import Card from './components/Card';
import Chart from './components/Chart';
import Table from './components/Table';
import Metrics from './components/Metrics';

import CalendarIcon from './icons/calendar.svg';
import DownloadIcon from './icons/download.svg';
import PieIcon from './icons/pie.svg';
import ImgIcon from './icons/img.svg';
import LightningIcon from './icons/lightning.svg';
import SettingsIcon from './icons/settings.svg';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <Layout
      navbar={
        <>
          <div className={styles['top-part']}>
            <div className={styles['avatar']} />
            <img src={CalendarIcon} />
            <img src={DownloadIcon} />
            <img src={LightningIcon} />
            <img src={PieIcon} />
            <img src={ImgIcon} />
          </div>
          <div className={styles['bottom-part']}>
            <img src={SettingsIcon} />
          </div>
        </>
      }
      content={
        <>
          <Toolbar />
          <Section content={
            <>
              <h1>Dashboard</h1>
              <CardGrid primary={
                <Card content={
                  <Chart />
                } />
              }
                secondary={
                  <>
                    <Card content={
                      <Metrics
                        trendValue="4.56"
                        label="Total revenue"
                        value="500K"
                      />
                    } />
                    <Card content={
                      <Metrics
                        trendValue="3.27"
                        label="Views"
                        value="20K"
                      />
                    } />
                  </>
                }
              />
            </>
          } />
          <Section content={
            <>
              <h2>Recent transactions</h2>
              <CardGrid style={{ height: '100%' }}
                primary={
                  <Table />
                }
              />
            </>
          } />
        </>
      } />
  );
};

export default App;