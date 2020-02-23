import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import "./dashboard.css";
import Typography from "@material-ui/core/Typography";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  ZAxis,
  LineChart,
  Line,
  ComposedChart,
  PolarGrid,
  RadarChart,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis
} from "recharts";
import {
  data05,
data03,
data04,
data01,
data02,
data
} from './data'

const classes = {
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 9
  },
  pos: {
    marginBottom: 12
  }
};

const commonFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default function dashboard1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 115px)"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        {[
          { raise: 40, name: "Total Users", value: 2300 },
          { raise: -30, name: "Average Time", value: 123.5 },
          { raise: 34, name: "Total Males", value: 2500 },
          { raise: -12, name: "Total Females", value: 4567 },
          { raise: 34, name: "Total Collections", value: 2315 },
          { raise: 34, name: "Total Connections", value: 7325 }
        ].map(item => {
          return (
            <>
              <div style={{ flexGrow: 1, margin: "5px" }}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {item.value}
                  </Typography>{" "}
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.raise}
                  </Typography>{" "}
                </CardContent>
              </div>
              <Divider
                orientation="vertical"
                variant="middle"
                style={{ height: "70%" }}
              />
            </>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 6 }}>
        <Card
          style={{
            flexGrow: 3,
            margin: "5px",
            ...commonFlex
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Area Chart
            </Typography>
            <Divider />
            <AreaChart
              width={650}
              height={230}
              data={data}
              // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </CardContent>
        </Card>
        <Card
          style={{
            flexGrow: 2,
            margin: "5px",
            ...commonFlex
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Bar Chart
            </Typography>
            <Divider />
            <BarChart width={650} height={230} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 6 }}>
        <Card
          style={{
            flexGrow: 1,
            margin: "5px",
            ...commonFlex
          }}
        >          <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Sample Pie Chart
        </Typography>
        <Divider />
          <PieChart width={400} height={250}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
          </CardContent>
        </Card>
        <Card
          style={{
            flexGrow: 1,
            margin: "5px",
            ...commonFlex
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Scatter Chart
            </Typography>
            <Divider />
            <ScatterChart
              width={400}
              height={250}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter name="A school" data={data03} fill="#8884d8" />
              <Scatter name="B school" data={data04} fill="#82ca9d" />
            </ScatterChart>
          </CardContent>
        </Card>
        <Card
          style={{
            flexGrow: 1,
            margin: "5px",
            ...commonFlex
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Radar Chart
            </Typography>
            <Divider />
            <RadarChart outerRadius={90} width={400} height={250} data={data05}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 6 }}>
        <Card
          style={{
            flexGrow: 1,
            margin: "5px",
            ...commonFlex
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Composed Chart
            </Typography>
            <Divider />
            <ComposedChart width={600} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </CardContent>
        </Card>
        <Card
          style={{
            flexGrow: 1,
            margin: "5px",
            ...commonFlex
          }}
        >
          {" "}
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sample Line Chart
            </Typography>
            <Divider />
            <LineChart
              width={600}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
