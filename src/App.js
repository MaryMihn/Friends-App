import React from "react";

import Seaching from "./Seaching/Seaching";
import Header from "./Header/Header";
import User from "./Users/User";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    isLoading: false,
    users: [],
    sottingUsers: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          isLoading: true,
          users: data.results,
          sottingUsers: data.results,
        });
      });
    console.log(this.state.sottingUsers);
    console.log(this.state.users);
  }

  filterByAgeRef = React.createRef();
  filterByNameRef = React.createRef();
  filterByLocationRef = React.createRef();

  sortingByAgeUp = () => {
    let sortUsers = this.state.users.sort((a, b) => {
      return a.dob.age - b.dob.age;
    });
    this.setState({ users: sortUsers });
  };

  sortingByAgeDown = () => {
    let sortUsers = this.state.users.sort((a, b) => {
      return b.dob.age - a.dob.age;
    });
    this.setState({ users: sortUsers });
  };

  sortingByNameA = () => {
    let sortUsers = this.state.users.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
    this.setState({ users: sortUsers });
  };

  sortingByNameZ = () => {
    let sortUsers = this.state.users.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return -1;
      }
      if (a.name.first < b.name.first) {
        return 1;
      }
      return 0;
    });
    this.setState({ users: sortUsers });
  };

  findByAge = () => {
    let value = this.filterByAgeRef.current.value;
    let sortUsers = this.state.users.filter((user) => user.dob.age === +value);
    if (sortUsers.length > 0) {
      this.setState({ sottingUsers: sortUsers });
    }
    if (sortUsers.length === 0) {
      alert("Sory,we haven`t users wth this age");
      let bigvalue = this.state.users.filter((user) => user.dob.age > value);
      this.setState({ sottingUsers: bigvalue });
    }
  };

  findByName = () => {
    let value1 = this.filterByNameRef.current.value;
    let value = value1.charAt(0).toUpperCase() + value1.slice(1);
    let usersName = [];
    this.state.users.map((user) => {
      if (user.name.last.includes(value) || user.name.last.includes(value1)) {
        return usersName.push(user);
      }
    });
    if (usersName.length > 0) {
      this.setState({ sottingUsers: usersName });
    } else {
      alert("Sory,we haven`t users wth this location");
    }
  };

  findByLocation = () => {
    let value1 = this.filterByLocationRef.current.value;
    let value = value1.charAt(0).toUpperCase() + value1.slice(1);
    let usersLocation = [];
    this.state.users.map((user) => {
      if (
        user.location.city.includes(value) ||
        user.location.city.includes(value1)
      ) {
        return usersLocation.push(user);
      }
    });
    if (usersLocation.length > 0) {
      this.setState({ sottingUsers: usersLocation });
    } else {
      alert("Sory,we haven`t users wth this location");
    }
  };

  filterBySex = (value) => {
    let sortUsers = this.state.users.filter((user) => user.gender === value);
    this.setState({ sottingUsers: sortUsers });
    console.log(value);
  };

  render() {
    const user = this.state.sottingUsers.map((user, index) => {
      return (
        <User
          key={user.name.last + user.id.name + index}
          title={user.name.title}
          first={user.name.first}
          last={user.name.last}
          userPhoto={user.picture.large}
          userAge={user.dob.age}
          userMail={user.email}
          userPhone={user.phone}
          userCity={user.location.city}
          userSex={user.gender}
        />
      );
    });

    return (
      <div className="body">
        <Header />
        <div className="main">
          <Seaching
            sortingByAgeUp={this.sortingByAgeUp}
            sortingByAgeDown={this.sortingByAgeDown}
            sortingByNameZ={this.sortingByNameZ}
            sortingByNameA={this.sortingByNameA}
            filterByAgeRef={this.filterByAgeRef}
            filterByNameRef={this.filterByNameRef}
            filterByLocationRef={this.filterByLocationRef}
            findByAge={this.findByAge}
            findByName={this.findByName}
            findByLocation={this.findByLocation}
            filterBySex={this.filterBySex}
          />
          <div className="users">{user}</div>
        </div>
      </div>
    );
  }
}

export default App;
