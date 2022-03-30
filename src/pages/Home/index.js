import React from 'react'

import styles from "./home.module.scss"

const Home = () => {
    const payload = [{
        "App": {
            "Folder1": {
                "Document1": {
                    isFolder: false
                },
                isFolder: true
            },
            "Folder2": {
                "Folder3": {
                    "Document2": {
                        isFolder: false
                    },
                    isFolder: true
                },
                isFolder: true
            },
            "Document3": {
                isFolder: false,
            },
            isFolder: true,
        }
    }]

    const renderCard = () => {
        return (
            <div>
                <details>
                    <summary> App </summary>
                    <details>
                        <summary>Folder 1</summary>
                        Document 1
                    </details>
                    <details>
                        <summary> Folder 2</summary>
                        <details>
                            <summary>Folder 3</summary>
                            Document 2
                        </details>
                    </details>
                    <p>Document 3</p>
                </details>
            </div>
        )
    }

    return (
        <div className={styles.mainContainer}>
            {renderCard()}
        </div>
    )
}

export default Home;

