import { Tabs } from 'antd';
import styles from "./FSTabs.module.css";

export const FSTabs = ({ onChange, defaultActiveKeyTab, tabItems, tabExtraContentStart,
  tabExtraContentEnd, ...Rest }) => {
  return (
    <>
      <Tabs
        defaultActiveKey={defaultActiveKeyTab}
        onChange={onChange}
        items={tabItems}
        className={styles.FSTabs}
        tabBarExtraContent={{
          left: tabExtraContentStart,
          right: tabExtraContentEnd
        }}
        animated={{ tabPane: true }}
        {...Rest}
      />
    </>
  );
}