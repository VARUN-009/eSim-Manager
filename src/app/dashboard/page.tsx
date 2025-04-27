// app/dashboard/page.tsx (SERVER COMPONENT)

// import Layout and other components
import Layout from "../components/Layout";
import { Suspense } from "react";
import DashboardContent from "./DashboardContent";

// Dashboard page component
export default function DashboardPage() {
  return (
    <Layout>
      {/* Page layout wrapper */}
      <Suspense fallback={<div>Loading dashboard...</div>}>
        {/* Show loading text while content loads */}
        <DashboardContent /> {/* Main dashboard content */}
      </Suspense>
    </Layout>
  );
}
