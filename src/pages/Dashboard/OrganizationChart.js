import React from "react"
import { Tree, TreeNode } from "react-organizational-chart"
import styled from "styled-components"

const StyledNode = styled.div`
  padding: 1px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #556ee6;
`

const StyledTreeExample = ({periodData,dataColors}) => (
  <Tree
    lineWidth={"2px"}
    lineColor={"#556ee6"}
    lineBorderRadius={"10px"}
    label={
      <StyledNode>
        {console.log('Organization Customization :: :',periodData)}
        <div>
          <img
            style={{ width: 50, height: 50, borderRadius: 50 }}
            src={require("../../assets/images/users/avatar-7.jpg")}
            alt="My Image"
          />
          <p style={{ fontSize: "smaller" }}>Jeet Sikand</p>
        </div>{" "}
      </StyledNode>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          {" "}
          <div>
            <img
              style={{ width: 50, height: 50, borderRadius: 50 }}
              src={require("../../assets/images/users/avatar-2.jpg")}
              alt="My Image"
            />
            <p style={{ fontSize: "smaller" }}>Black Man</p>
          </div>{" "}
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <div>
              <img
                style={{ width: 50, height: 50, borderRadius: 50 }}
                src={require("../../assets/images/users/avatar-1.jpg")}
                alt="My Image"
              />
              <p style={{ fontSize: "smaller" }}>Muhammad Zia</p>
            </div>{" "}
          </StyledNode>
        }
      />
    </TreeNode>
    <TreeNode
      label={
        <StyledNode>
          {" "}
          <div>
            <img
              style={{ width: 50, height: 50, borderRadius: 50 }}
              src={require("../../assets/images/users/avatar-3.jpg")}
              alt="My Image"
            />
            <p style={{ fontSize: "smaller" }}>LAdy Chinto</p>
          </div>{" "}
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            {" "}
            <div>
              <img
                style={{ width: 50, height: 50, borderRadius: 50 }}
                src={require("../../assets/images/users/avatar-4.jpg")}
                alt="My Image"
              />
              <p style={{ fontSize: "smaller" }}>Kathy</p>
            </div>{" "}
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src={require("../../assets/images/users/avatar-5.jpg")}
                  alt="My Image"
                />
                <p style={{ fontSize: "smaller" }}>Imran Hashmi</p>
              </div>{" "}
            </StyledNode>
          }
        />
        <TreeNode
          label={
            <StyledNode>
              {" "}
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src={require("../../assets/images/users/avatar-6.jpg")}
                  alt="My Image"
                />
                <p style={{ fontSize: "smaller" }}>johny liver</p>
              </div>{" "}
            </StyledNode>
          }
        />
      </TreeNode>
    </TreeNode>
    <TreeNode
      label={
        <StyledNode>
          {" "}
          <div>
            <img
              style={{ width: 50, height: 50, borderRadius: 50 }}
              src={require("../../assets/images/users/avatar-5.jpg")}
              alt="My Image"
            />
            <p style={{ fontSize: "smaller" }}>Pritty Zanta</p>
          </div>{" "}
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            {" "}
            <div>
              <img
                style={{ width: 50, height: 50, borderRadius: 50 }}
                src={require("../../assets/images/users/avatar-2.jpg")}
                alt="My Image"
              />
              <p style={{ fontSize: "smaller" }}>Muhammad Zia</p>
            </div>{" "}
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            {" "}
            <div>
              <img
                style={{ width: 50, height: 50, borderRadius: 50 }}
                src={require("../../assets/images/users/avatar-2.jpg")}
                alt="My Image"
              />
              <p style={{ fontSize: "smaller" }}>Don't Know</p>
            </div>{" "}
          </StyledNode>
        }
      />
    </TreeNode>
  </Tree>
)

export default StyledTreeExample
