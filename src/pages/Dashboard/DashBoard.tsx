import {
  MainContent,
  WelcomeCard,
  Metrics,
  Profile,
  RecentSold,
} from "./DashBoard.style";

export const DashBoard = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  return (
    <MainContent>
      <Profile>
        <h1>Welcome back, Dan!</h1>
        <p>
          {new Date().getDate()} {month[new Date().getMonth()]},{" "}
          {weekday[new Date().getDay()]}
        </p>
      </Profile>
      <WelcomeCard>
        <div>
          <h2>Good Job!</h2>
          <p>You have over 20,000 visitors in the last 10 days. Keep it up!</p>
        </div>
        <div>
          <img
            src="src/assets/cart.png"
            alt="Shopping cart"
            style={{ maxWidth: "100px", zIndex: 1 }}
          />
        </div>
      </WelcomeCard>
      <Metrics>
        <div>
          <h4>+6.9K</h4>
          <p>Favorites</p>
        </div>
        <div>
          <h4>+2.4K</h4>
          <p>Add to bag</p>
        </div>
        <div>
          <h4>+1K</h4>
          <p>Orders</p>
        </div>
      </Metrics>
      <RecentSold>
        <h3>Recent Sold</h3>
        <div className="items">
          <div className="item1">
            <img src="src/assets/bag.jpg" alt="Bag" />
            <h4>Bang Bag</h4>
            <p>$1.5k earned</p>
          </div>
          <div className="item2">
            <div className="div1">
              <img src="src/assets/orders.png" alt="" />
              <img src="src/assets/carts.png" alt="" />
            </div>

            <div className="div2">
              <h4>Dresses</h4>
              <p><span>25 Items</span> <span>$3.5k earned</span></p>
            </div>
          </div>
        </div>
      </RecentSold>
    </MainContent>
  );
};
