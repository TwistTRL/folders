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
    const tabW = (width + (foldersLen - 1) * 10) / foldersLen;
    const styles = {
      tabs: { backgroundColor: "rgba(0,0,0,0)" },
      tab: (folder, i) => {
        return {
          backgroundColor: folder.backgroundColor,
          color: "white",
          width: tabW,
          right: i * 10,
          zIndex: 10 - i - 1
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

    if (foldersLen === 1) {
      return (
        <div
          className="wrap"
          style={{
            width: width,
            height: height
          }}
        >
          <div
            className="folder-content-container"
            style={{
              width: folderContentWidth ? folderContentWidth : width,
              height: folderContentHeight ? folderContentHeight : height
            }}
          >
            <div className={className} style={styles.tabPanel(folders[0])}>
              {folders[0].component}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className="wrap"
        style={{
          width: width,
          height: height
        }}
      >
        <div
          className="folder-content-container"
          style={{
            width: folderContentWidth ? folderContentWidth : width,
            height: folderContentHeight ? folderContentHeight : height
          }}
        >
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
        </div>
      </div>
    );
  }
}

export default Folders;
