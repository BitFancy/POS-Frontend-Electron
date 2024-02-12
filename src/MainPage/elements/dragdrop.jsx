import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `Draggable Card ${k}`,
    content: `Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const onDrop = (data) => {
  console.log(data);
};
class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(3),
      items1: getItems(5),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    const items1 = reorder(
      this.state.items1,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
      items1,
    });
  }
  render() {
    return (
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Drag &amp; Drop</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dream-pos/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Drag &amp; Drop</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="row"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="col-md-4"
                        >
                          <div className="card">
                            <div className="card-header">
                              <h5 className="card-title">{item.id}</h5>
                            </div>
                            <div className="card-body">
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic List Group Sortable</h5>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <Droppable droppableId="droppable" direction="vertical">
                    {(provided, snapshot) => (
                      <ul
                        className="list-group"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {this.state.items1.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <li
                                className="list-group-item"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="media">
                                  <div className="media-body">
                                    <h5 className="mt-0">Darren Elder</h5>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                    </p>
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Drag Card */}
            <div className="col-md-12">
              <div className="card" id="dd-handle">
                <div className="card-header">
                  <h5 className="card-title">Drag Handler</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h4 className="my-1">List One</h4>
                      <ul className="list-group" id="handle-list-1">
                        <li className="list-group-item">
                          <span className="handle">+</span> Cras justo odio
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Dapibus ac facilisis
                          in
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Morbi leo risus
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Porta ac consectetur
                          ac
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Vestibulum at eros
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="my-1">List Two</h4>
                      <ul className="list-group" id="handle-list-2">
                        <li className="list-group-item">
                          <span className="handle">+</span> Cras justo odio
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Dapibus ac facilisis
                          in
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Morbi leo risus
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Porta ac consectetur
                          ac
                        </li>
                        <li className="list-group-item">
                          <span className="handle">+</span> Vestibulum at eros
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
    );
  }
}
export default DragDrop;
