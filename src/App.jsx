import { ConfigProvider } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routeList } from './routes';
import 'antd-css-utilities/utility.min.css';
import './App.css';
import { Suspense } from 'react';
import SidebarProvider from './contexts/SidebarProvider/SidebarProvider';

function App() {
  return (
    <>
      <SidebarProvider>
        <ConfigProvider
          theme={{
            hashed: false,
            token: {
              fontFamily: "Sora, sans-serif",
            },
          }}>
          <Suspense>
            <Router>
              {/* <ScrollToTop /> */}
              <Routes>
                {routeList?.map((routeItem, routeIndex) => {
                  return (
                    <Route
                      key={`routeIndex-${routeIndex}`}
                      path={routeItem.path}
                      element={routeItem.component}
                    />
                  );
                })}
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Router>
          </Suspense>
        </ConfigProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
