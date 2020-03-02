import React, { PureComponent } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './Folders.css'

class Folders extends PureComponent {
  constructor (props) {
    super(props)
    this.folders = this.props.folders
  }

  render () {
    let folderW = this.props.width
    let folderHString = this.props.heightString
    const tabW =
      (folderW + (this.props.folders.length - 1) * 10) /
      this.props.folders.length
    const styles = {
      tabs: { backgroundColor: 'rgba(0,0,0,0)' },
      tab: (folder, i) => {
        return {
          backgroundColor: folder.backgroundColor,
          color: 'white',
          width: tabW,
          right: i * 10 + 'px',
          zIndex: 10 - i - 1
        }
      },
      tabPanel: folder => {
        return {
          backgroundColor: folder.backgroundColor,
          height: folderHString,
          overflow: this.props.className === 'xray-folder' ? 'auto' : 'hidden'
        }
      }
    }

    if (this.folders.length === 1) {
      return (
        <div
          className={this.props.className}
          style={styles.tabPanel(this.folders[0])}
        >
          {this.folders[0].component}
        </div>
      )
    }

    return (
      <Tabs className={this.props.className} style={styles.tabs}>
        <TabList>
          {this.folders.map((folder, i) => {
            return (
              <Tab
                key={folder.name}
                style={styles.tab(folder, i)}
                className='side-tab tab1'
              >
                {' '}
                {folder.name}
              </Tab>
            )
          })}
        </TabList>
        {this.folders.map(folder => {
          return (
            <TabPanel key={folder.name} style={styles.tabPanel(folder)}>
              {folder.component}
            </TabPanel>
          )
        })}
      </Tabs>
    )
  }
}

export default Folders
