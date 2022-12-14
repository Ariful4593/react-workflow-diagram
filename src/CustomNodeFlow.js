import React, { useState, useEffect, useCallback, useRef } from "react";
import ButtonEdge from "./ButtonEdge.js";
import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  MiniMap,
  Controls
} from "react-flow-renderer";
import {
  useReactFlow,
  ReactFlowProvider,
  useEdgesState,
  updateEdge
} from "reactflow";
import ColorSelectorNode from "./ColorSelectorNode";
import "./style.css";
import TextUpdaterNode from "./TextUpdaterNode.js";
// import "./styles.css";

const initBgColor = "#b1b0bf";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode
};

// const nodeTypes = { textUpdater: TextUpdaterNode };

const CustomNodeFlow = () => {
  const deleteNode = (newNode) => {
    console.log("Line 33", newNode);

    setElements((prev) => prev.filter((item) => item.id !== newNode));
    // setElements(newNode);
  };

  const initData = [
    {
      id: "1",
      // type: "input",
      data: { label: "Source-Cluster" },
      position: { x: -20, y: 230 },
      style: { border: "1px solid #777", padding: 10 },
      sourcePosition: "right",
      targetPosition: "bottom"
      // type: 'buttonedge',
    },
    {
      id: "11",
      type: "input",
      data: { label: "Backupplan" },
      position: { x: -20, y: 370 },
      style: { border: "1px solid #777", padding: 10 },
      sourcePosition: "top"
    },
    // {
    //   id: "2",
    //   type: "selectorNode",
    //   data: { label: "Ariful", deleteNode: deleteNode },
    //   style: {
    //     border: "2px solid black",
    //     borderRadius: "5px",
    //     padding: 10,
    //     background: "#fff"
    //   },
    //   position: { x: 300, y: 200 }
    // },
    {
      id: "3",
      // type: "output",
      type: "selectorNode",
      data: { label: " A", deleteNode: deleteNode },
      position: { x: 650, y: 25 },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      targetPosition: "left",
      sourcePosition: "right"
      // type: 'buttonedge',
    },
    {
      id: "108",
      // type: "output",
      type: "selectorNode",
      data: { label: " A-108", deleteNode: deleteNode },
      position: { x: 650, y: -45 },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      targetPosition: "left",
      sourcePosition: "right"
    },
    // {
    //   id: "31",
    //   data: { label: "Consistent sets" },
    //   type: "output",
    //   position: { x: 950, y: 25 },
    //   targetPosition: "left",
    //   sourcePosition: "right"
    // },
    // {
    //   id: "32",
    //   data: { label: "Consistent sets two" },
    //   type: "output",
    //   position: { x: 900, y: -25 },
    //   targetPosition: "left",
    //   sourcePosition: "right"
    // },
    {
      id: "4",
      // type: "output",
      type: "selectorNode",
      data: { label: " B", deleteNode: deleteNode },
      position: { x: 650, y: 100 },
      targetPosition: "left",
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      sourcePosition: "right"
    },
    {
      id: "5",
      // type: "output",
      type: "selectorNode",
      data: { label: " C", deleteNode: deleteNode },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      position: { x: 650, y: 175 },
      targetPosition: "left",
      sourcePosition: "right"
    },
    {
      id: "6",
      type: "output",
      data: { label: " D", deleteNode: deleteNode },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      position: { x: 650, y: 250 },
      targetPosition: "left",
      sourcePosition: "right"
    },
    {
      id: "7",
      type: "output",
      data: { label: " E", deleteNode: deleteNode },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      position: { x: 650, y: 325 },
      targetPosition: "left",
      sourcePosition: "right"
    },
    {
      id: "8",
      // type: "output",
      data: { label: " F" },
      position: { x: 650, y: 400 },
      targetPosition: "left"
    },
    {
      id: "9",
      // type: "output",
      data: { label: " G", deleteNode: deleteNode },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      position: { x: 650, y: 475 },
      targetPosition: "left"
    },
    {
      id: "10",
      type: "output",
      data: { label: " H", deleteNode: deleteNode },
      style: {
        border: "2px solid black",
        borderRadius: "5px",
        padding: 10,
        background: "#fff"
      },
      position: { x: 650, y: 250 },
      targetPosition: "left"
    },
    {
      id: "e1-2",
      source: "1",
      target: "1",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2a-3",
      source: "1",
      target: "3",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2a-4",
      source: "1",
      target: "108",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    // {
    //   id: "e2a-5",
    //   source: "3",
    //   target: "31",
    //   sourceHandle: "a",
    //   animated: true,
    //   style: { stroke: "#fff" }
    // },
    // {
    //   id: "e2a-6",
    //   source: "3",
    //   target: "32",
    //   sourceHandle: "a",
    //   animated: true,
    //   style: { stroke: "#fff" }
    // },
    // {
    //   id: "32",
    //   data: { label: "Consistent sets two" },
    //   type: "output",
    //   position: { x: 900, y: -25 },
    //   targetPosition: "left"
    // },
    {
      id: "e2b-4",
      source: "1",
      target: "4",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-5",
      source: "1",
      target: "5",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-6",
      source: "1",
      target: "6",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-7",
      source: "1",
      target: "7",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-8",
      source: "1",
      target: "8",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-9",
      source: "1",
      target: "9",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    {
      id: "e2b-10",
      source: "1",
      target: "3",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: true,
      style: { stroke: "#fff" }
    },
    // {
    //   id: "3-31",
    //   source: "3",
    //   target: "31",
    //   // sourceHandle: "b",
    //   sourceHandle: "a",
    //   animated: false,
    //   type: "smoothstep",
    //   style: { stroke: "#fff" }
    // },
    {
      id: "1-11",
      source: "11",
      target: "1",
      // sourceHandle: "b",
      sourceHandle: "a",
      animated: false,
      type: "smoothstep",
      style: { stroke: "#fff" }
    }
  ];
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState(initData);
  const [bgColor, setBgColor] = useState(initBgColor);
  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setElements((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  const onElementClick = (event, element) => {
    console.log("Element clicked", element);
  };
  const [edges, setEdges, onEdgesChange] = useEdgesState(initData);
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  }, []);
  const onNodeDragStop = (event, node) => {
    // console.log("drag stop", node)
    const newList = elements.map((item) => {
      if (item.id === node.id) {
        return {
          ...item,
          position: node.position
        };
      }
      return item;
    });
    setElements(newList);
  };
  // console.log(elements);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge(
          {
            ...params,
            type: "buttonedge",
            data: { name: "Ariful Islam", deleteEdge: deleteNode },
            animated: true,
            style: { stroke: "#fff" }
          },
          els
        )
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log("flow loaded:", rfi);
      }
    },
    [reactflowInstance]
  );

  const connectingNodeId = useRef(null);
  const onConnectStart = useCallback((_, { nodeId }) => {
    console.log("Line 361", nodeId);

    connectingNodeId.current = nodeId;
  }, []);

  const { project } = useReactFlow();
  const reactFlowWrapper = useRef(null);
  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");
      console.log("line 368", event.target);
      // console.log("line 344", event);

      const position = elements.find(
        (item) => item.id === connectingNodeId.current
      )?.position;
      console.log("line 385", position);

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const {
          top,
          left,
          bottom
        } = reactFlowWrapper.current.getBoundingClientRect();
        console.log("Line 620", { top, left, bottom });
        const id = `${Math.floor(Math.random() * (1000 - 100 + 1) + 100)}`;
        const currentNode = elements.find(
          (item) => item.id === connectingNodeId.current
        )?.position;

        console.log("exist node", currentNode);

        console.log("current node one ", {
          x: event.clientX,
          y: event.clientY
        });

        const newNode = [
          {
            id,
            // we are removing the half of the node width (75) to center the new node
            // position: project({
            //   x: currentNode.x + event.clientX,
            //   y: -30
            // }),
            position: project({
              x: event.clientX - left - 75,
              y: event.clientY - top
            }),
            data: { label: `Node ${id}`, deleteNode: deleteNode },
            type: "selectorNode",
            style: {
              border: "2px solid black",
              borderRadius: "5px",
              padding: 10,
              background: "#fff"
            },
            targetPosition: "left",
            sourcePosition: "right"
          },
          {
            id: `e2a-${id}`,
            source: connectingNodeId?.current,
            target: `${id}`,
            sourceHandle: "a",
            animated: true,
            data: { name: "Ariful Islam", deleteEdge: deleteNode },
            type: "buttonedge",
            style: { stroke: "#fff" }
          }
        ];

        setElements((nds) => nds.concat(newNode));
      }
    },
    [project]
  );

  const edgeTypes = {
    buttonedge: ButtonEdge
  };
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        edges={edges}
        elements={elements}
        onElementClick={onElementClick}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        style={{ background: bgColor }}
        onLoad={onLoad}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultZoom={1.5}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onEdgesChange={onEdgesChange}
        edgeTypes={edgeTypes}
      >
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        /> */}

        {/* <Controls>
          <ControlButton onClick={(e) => console.log("Deleted node", e)}>
            Delete Node
          </ControlButton>
        </Controls> */}
      </ReactFlow>

      {/* <button onClick={() => addNode()}>Add new node</button> */}
    </div>
  );
};

//export default CustomNodeFlow;
export default () => (
  <ReactFlowProvider>
    <CustomNodeFlow />
  </ReactFlowProvider>
);

const CustomLinkBtn = () => {
  return <button>Delete Node</button>;
};
