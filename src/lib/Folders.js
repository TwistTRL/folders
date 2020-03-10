import React, { PureComponent } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Folders.css";

class Folders extends PureComponent {
  render() {
    const {
      folders,
      className,
      width,
      height,
      folderContentWidth,
      folderContentHeight
    } = this.props;
    const foldersLen = folders.length;
    const tabW = width / foldersLen;
    const styles = {
      tabs: { backgroundColor: "rgba(0,0,0,0)" },
      tab: (folder, i) => {
        return {
          backgroundColor: folder.backgroundColor,
          color: "white",
          width: tabW,
          // left: i * 10,
          zIndex: 10 - foldersLen - i - 1
        };
      },
      tabPanel: folder => {
        return {
          backgroundColor: folder.backgroundColor,
          height: height,
          overflow: className === "xray-folder" ? "auto" : "hidden"
        };
      }
    };

    return (
      <div
        className="wrap"
        style={{
          maxWidth: folderContentWidth,
          height: height,
          direction: "rtl"
        }}
      >
        <div
          className="folder-content-container"
          style={{
            maxWidth: folderContentWidth ? folderContentWidth : width,
            height: folderContentHeight ? folderContentHeight : height,
            float: "right"
          }}
        >
          {foldersLen === 1 ? (
            <div className={className} style={styles.tabPanel(folders[0])}>
              {folders[0].component}
            </div>
          ) : (
            <Tabs className={className} style={styles.tabs}>
              <TabList>
                {folders.map((folder, i) => {
                  return (
                    <Tab
                      key={folder.name}
                      style={styles.tab(folder, i)}
                      className="side-tab tab1"
                    >
                      {" "}
                      {folder.name}
                    </Tab>
                  );
                })}
              </TabList>

              {folders.map(folder => {
                return (
                  <TabPanel key={folder.name} style={styles.tabPanel(folder)}>
                    {folder.component}
                  </TabPanel>
                );
              })}
            </Tabs>
          )}
        </div>
      </div>
    );
  }
}

export default Folders;
