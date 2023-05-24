import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '易于使用',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        基于Springboot+Vue技术,拥有可视化的界面,开服只需要点点点即可完成
      </>
    ),
  },
  {
    title: '专注于饥荒',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        只专注于饥荒联机版
      </>
    ),
  },
  {
    title: '互帮互助',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        建设活跃社区,互帮互助,解决各种使用上的困难
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
