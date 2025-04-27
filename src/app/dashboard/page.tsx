// app/dashboard/page.tsx (SERVER COMPONENT)
import Layout from "../components/Layout";
import { Suspense } from "react";
import DashboardContent from "./DashboardContent";

export default function DashboardPage() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <DashboardContent />
      </Suspense>
    </Layout>
  );
}
