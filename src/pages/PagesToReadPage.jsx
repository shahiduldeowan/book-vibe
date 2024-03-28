import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import { getReadBooks } from "../utils";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToReadPage = () => {
  const [books, setBooks] = useState([]);
  const loadedBooks = useLoaderData();

  useEffect(() => {
    const readBookIds = getReadBooks();
    const myBooks = loadedBooks.filter((book) => {
      return readBookIds.find((item) => item === book.bookId);
    });
    setBooks(myBooks);
  }, [loadedBooks]);

  return (
    <div>
      {books && (
        <div className="w-full h-[550px] bg-[#13131308] rounded-3xl">
          <BarChart
            width={1170}
            height={550}
            data={books}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {books.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default PagesToReadPage;
