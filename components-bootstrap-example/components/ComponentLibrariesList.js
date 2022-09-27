import ListGroup from "react-bootstrap/ListGroup";

const UI_LIBRARY_LIST = [
  {
    name: "MUI",
    url: "https://mui.com/",
  },
  {
    name: "React Bootstrap (the one we're using)",
    url: "https://react-bootstrap.github.io/",
  },
  {
    name: "Ant Design",
    url: "https://ant.design/docs/react/introduce",
  },
  {
    name: "Semantic UI",
    url: "https://react.semantic-ui.com/",
  },
  {
    name: "Chakra UI",
    url: "https://chakra-ui.com/getting-started",
  },
];

export default function ComponentLibrariesList() {
  return (
    <ListGroup>
      {UI_LIBRARY_LIST.map((uiLibrary, index) => {
        return (
          <ListGroup.Item key={index}>
            <a href={uiLibrary.url}>{uiLibrary.name}</a>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
