import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { NAVIGATION, demoTheme } from '../config/navigation'; // Import your NAVIGATION
import StudentAdd from './component/StudentAdd';
import StudentList from './component/StudentList';
import TeacherAdd from './component/TeacherAdd';
import TeacherList from './component/TeacherList';
import SubjectAdd from './component/SubjectAdd';
import SubjectList from './component/SubjectList';
import SyllabusForm from './component/SyllabusForm';
import SyllabusList from './component/SyllabusList';
import SchoolRegistration from './component/TeacherForm';
import SchoolForm from './component/StudentlForm';
import TeacherForm from './component/TeacherForm';
import StudentForm from './component/StudentlForm';
import ClassForm from './component/ClassForm';
import ClassRegistration from './component/ClassRegistration';
import FeesStructure from './component/FeesStructure';
import DashboardPage from './component/DashboardPage';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import AuthRoute from './component/AuthRoute';
import Signup from './component/Signup';
import LogoutButton from './component/LogoutButton'; 
import FeesVoucher from './component/FeesVoucher';
import FeesSubmission from './component/FeesSubmission';
import AddmissionStructure from './component/AddmissionStructure';
import ExamSchedule from './component/ExamSchedule';
import ExamResult from './component/ExamResult';

function App() {
  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme}>
      <Router>
        <LogoutButton  />  
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardLayout><PageContainer><DashboardPage /></PageContainer></DashboardLayout>} />
            <Route path="/students/add" element={<DashboardLayout><PageContainer><StudentAdd /></PageContainer></DashboardLayout>} />
            <Route path="/students/list" element={<DashboardLayout><PageContainer><StudentList /></PageContainer></DashboardLayout>} />
            <Route path="/teachers/add" element={<DashboardLayout><PageContainer><TeacherAdd /></PageContainer></DashboardLayout>} />
            <Route path="/teachers/list" element={<DashboardLayout><PageContainer><TeacherList /></PageContainer></DashboardLayout>} />
            <Route path="/subjects/add" element={<DashboardLayout><PageContainer><SubjectAdd /></PageContainer></DashboardLayout>} />
            <Route path="/subjects/list" element={<DashboardLayout><PageContainer><SubjectList /></PageContainer></DashboardLayout>} />
            <Route path="/syllabus/add" element={<DashboardLayout><PageContainer><SyllabusForm /></PageContainer></DashboardLayout>} />
            <Route path="/syllabus/list" element={<DashboardLayout><PageContainer><SyllabusList /></PageContainer></DashboardLayout>} />
            <Route path="/school/form" element={<DashboardLayout><PageContainer><StudentForm /></PageContainer></DashboardLayout>} />
            <Route path="/school/registration" element={<DashboardLayout><PageContainer><TeacherForm /></PageContainer></DashboardLayout>} />
            <Route path="/class/form" element={<DashboardLayout><PageContainer><ClassForm /></PageContainer></DashboardLayout>} />
            <Route path="/class/registration" element={<DashboardLayout><PageContainer><ClassRegistration /></PageContainer></DashboardLayout>} />
            <Route path="/fees/structure" element={<DashboardLayout><PageContainer><FeesStructure /></PageContainer></DashboardLayout>} />
            <Route path="/fees/voucher" element={<DashboardLayout><PageContainer><FeesVoucher /></PageContainer></DashboardLayout>} />
            <Route path="/fees/submission" element={<DashboardLayout><PageContainer><FeesSubmission /></PageContainer></DashboardLayout>} />
            <Route path="/admission/structure" element={<DashboardLayout><PageContainer><AddmissionStructure /></PageContainer></DashboardLayout>} />
            <Route path="/exam/schedule" element={<DashboardLayout><PageContainer><ExamSchedule /></PageContainer></DashboardLayout>} />
            <Route path="/exam/result" element={<DashboardLayout><PageContainer><ExamResult /></PageContainer></DashboardLayout>} />
          </Route>

          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
