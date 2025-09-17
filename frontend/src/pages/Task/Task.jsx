import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const COLUMN_IDS = ["addTask", "doing", "done"];

function Task() {
  const [columns, setColumns] = useState({
    addTask: [],
    doing: [],
    done: [],
  });

  const [inputValue, setInputValue] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: `${Date.now()}`, // unique id
      content: inputValue.trim(),
    };
    setColumns((prev) => ({
      ...prev,
      addTask: [...prev.addTask, newTask],
    }));
    setInputValue("");
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let fromColumnId = null;
    let toColumnId = over.id;

    // Find which column the dragged item came from
    for (const key in columns) {
      if (columns[key].find((item) => item.id === active.id)) {
        fromColumnId = key;
        break;
      }
    }

    if (!fromColumnId || !columns[toColumnId]) return;

    const fromItems = [...columns[fromColumnId]];
    const toItems = [...columns[toColumnId]];

    const draggedItemIndex = fromItems.findIndex((item) => item.id === active.id);
    const [movedItem] = fromItems.splice(draggedItemIndex, 1);

    toItems.push(movedItem);

    setColumns({
      ...columns,
      [fromColumnId]: fromItems,
      [toColumnId]: toItems,
    });
  };

  return (
    <div className="p-4 font-sans min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">
        📝 Simple TODO Board
      </h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Enter task..."
          className="border px-2 py-1 rounded mr-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-3 gap-4">
          {COLUMN_IDS.map((columnId) => (
            <SortableColumn
              key={columnId}
              columnId={columnId}
              items={columns[columnId]}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

const SortableColumn = ({ columnId, items }) => {
  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  const titleMap = {
    addTask: "Add Task",
    doing: "Doing",
    done: "Done",
  };

  return (
    <div ref={setNodeRef} className="bg-white rounded shadow p-4 min-h-[300px]">
      <h2 className="text-lg font-semibold mb-2">{titleMap[columnId]}</h2>
      <SortableContext
        items={items.map((item) => item.id)} // pass correct unique IDs
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <TaskCard key={item.id} id={item.id} content={item.content} />
        ))}
      </SortableContext>
    </div>
  );
};

const TaskCard = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-blue-100 p-2 mb-2 rounded shadow cursor-move"
    >
      {content}
    </div>
  );
};

export default Task;
