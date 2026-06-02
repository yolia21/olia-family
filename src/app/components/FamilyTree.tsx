"use client";

import React from 'react';

interface FamilyTreeProps {
  onNodeClick: (id: string) => void;
}

export default function FamilyTree({ onNodeClick }: FamilyTreeProps) {
  return (
    <div className="tree-wrapper">
      {/* Desktop Tree (Hidden on mobile) */}
      <div className="tree-desktop">
        <div className="tree-container">
          <div className="tree">
            <ul>
              <li>
                <div 
                  className="tree-node root-node" 
                  onClick={() => onNodeClick("kasim-olia")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Kasim Olia</span>
                  <span className="node-title">Patriarch (b. ~1850)</span>
                </div>
                <ul>
                  {/* Hashimi Branch */}
                  <li>
                    <div 
                      className="tree-node hashimi-node" 
                      onClick={() => onNodeClick("hashim-kasim")}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="node-name">Hashim Kasim Olia</span>
                      <span className="node-title">Hashimi Founder</span>
                      <span className="node-spouse-link">m. Rasoolbibi Piperdy</span>
                    </div>
                    <ul>
                      <li>
                        <div 
                          className="tree-node hashimi-node" 
                          onClick={() => onNodeClick("kasim-h")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Kasim H. Olia</span>
                          <span className="node-title">d. 1997 Karachi</span>
                        </div>
                      </li>
                      <li>
                        <div 
                          className="tree-node hashimi-node" 
                          onClick={() => onNodeClick("ali-hashim")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Ali Hashim Olia</span>
                          <span className="node-title">b. 1912 - d. 1978</span>
                        </div>
                      </li>
                      <li>
                        <div 
                          className="tree-node hashimi-node" 
                          onClick={() => onNodeClick("mohammed-hashim")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Mohammed Hashim</span>
                          <span className="node-title">b. 1912 - d. 1968</span>
                        </div>
                      </li>
                      <li>
                        <div 
                          className="tree-node hashimi-node" 
                          onClick={() => onNodeClick("aishabibi-hashim")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Aishabibi Hashim</span>
                          <span className="node-title">m. Yusuf Ismail</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  
                  {/* Ismaili Branch */}
                  <li>
                    <div 
                      className="tree-node ismaili-node" 
                      onClick={() => onNodeClick("ismail-kasim")}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="node-name">Ismail Kasim Olia</span>
                      <span className="node-title">Ismaili Founder</span>
                      <span className="node-spouse-link">m. Madam Ashraf</span>
                    </div>
                    <ul>
                      <li>
                        <div 
                          className="tree-node ismaili-node" 
                          onClick={() => onNodeClick("yusuf-ismail")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Yusuf Ismail Olia</span>
                          <span className="node-title">b. ~1910 - d. 1975</span>
                        </div>
                      </li>
                      <li>
                        <div 
                          className="tree-node ismaili-node" 
                          onClick={() => onNodeClick("ghulam-mohammed")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Ghulam Mohammed</span>
                          <span className="node-title">Died in Rander</span>
                        </div>
                      </li>
                      <li>
                        <div 
                          className="tree-node ismaili-node" 
                          onClick={() => onNodeClick("kasim-ismail")}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-name">Kasim Ismail Olia</span>
                          <span className="node-title">Descendants in Rander</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Tree (Visible only on mobile) */}
      <div className="tree-mobile">
        <div className="mobile-tree-root">
          <div 
            className="tree-node root-node" 
            onClick={() => onNodeClick("kasim-olia")}
            role="button"
            tabIndex={0}
          >
            <span className="node-name">Kasim Olia</span>
            <span className="node-title">Patriarch (b. ~1850)</span>
          </div>
          
          <div className="mobile-tree-connector"></div>
          
          <div className="mobile-tree-branches">
            {/* Hashimi Branch */}
            <div className="mobile-tree-branch hashimi-branch">
              <div className="branch-label label-hashimi">Hashimi Branch</div>
              <div 
                className="tree-node hashimi-node" 
                onClick={() => onNodeClick("hashim-kasim")}
                role="button"
                tabIndex={0}
              >
                <span className="node-name">Hashim Kasim Olia</span>
                <span className="node-title">Founder</span>
                <span className="node-spouse-link">m. Rasoolbibi Piperdy</span>
              </div>
              <div className="mobile-leaf-container">
                <div 
                  className="tree-node hashimi-node" 
                  onClick={() => onNodeClick("kasim-h")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Kasim H. Olia</span>
                  <span className="node-title">d. 1997 Karachi</span>
                </div>
                <div 
                  className="tree-node hashimi-node" 
                  onClick={() => onNodeClick("ali-hashim")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Ali Hashim Olia</span>
                  <span className="node-title">b. 1912 - d. 1978</span>
                </div>
                <div 
                  className="tree-node hashimi-node" 
                  onClick={() => onNodeClick("mohammed-hashim")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Mohammed Hashim</span>
                  <span className="node-title">b. 1912 - d. 1968</span>
                </div>
                <div 
                  className="tree-node hashimi-node" 
                  onClick={() => onNodeClick("aishabibi-hashim")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Aishabibi Hashim</span>
                  <span className="node-title">m. Yusuf Ismail</span>
                </div>
              </div>
            </div>
            
            {/* Ismaili Branch */}
            <div className="mobile-tree-branch ismaili-branch">
              <div className="branch-label label-ismaili">Ismaili Branch</div>
              <div 
                className="tree-node ismaili-node" 
                onClick={() => onNodeClick("ismail-kasim")}
                role="button"
                tabIndex={0}
              >
                <span className="node-name">Ismail Kasim Olia</span>
                <span className="node-title">Founder</span>
                <span className="node-spouse-link">m. Madam Ashraf</span>
              </div>
              <div className="mobile-leaf-container">
                <div 
                  className="tree-node ismaili-node" 
                  onClick={() => onNodeClick("yusuf-ismail")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Yusuf Ismail Olia</span>
                  <span className="node-title">b. ~1910 - d. 1975</span>
                </div>
                <div 
                  className="tree-node ismaili-node" 
                  onClick={() => onNodeClick("ghulam-mohammed")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Ghulam Mohammed</span>
                  <span className="node-title">Died in Rander</span>
                </div>
                <div 
                  className="tree-node ismaili-node" 
                  onClick={() => onNodeClick("kasim-ismail")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="node-name">Kasim Ismail Olia</span>
                  <span className="node-title">Descendants in Rander</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
