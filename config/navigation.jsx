  // import { extendTheme } from '@mui/material/styles';
  // import DashboardIcon from '@mui/icons-material/Dashboard';
  // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  // import BarChartIcon from '@mui/icons-material/BarChart';
  // import LayersIcon from '@mui/icons-material/Layers';
  // import EmailIcon from '@mui/icons-material/Email';

  // export const NAVIGATION = [
  //   {
  //     segment: 'students',
  //     title: 'Students',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'add', title: 'Student Registration', to: '/students/add' },
  //       { segment: 'list', title: 'Student List', to: '/students/list' },
  //     ],
  //   },
  //   {
  //     segment: 'teachers',
  //     title: 'Teachers',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'add', title: 'Teacher Registration', to: '/teachers/add' },
  //       { segment: 'list', title: 'Teacher List', to: '/teachers/list' },
  //     ],
  //   },
  //   {
  //     segment: 'subjects',
  //     title: 'Subjects',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'add', title: 'Subject Add', to: '/subjects/add' },
  //       { segment: 'list', title: 'Subject List', to: '/subjects/list' },
  //     ],
  //   },
  //   {
  //     segment: 'syllabus',
  //     title: 'Syllabus',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'add', title: 'Syllabus Form', to: '/syllabus/add' },
  //       { segment: 'list', title: 'Syllabus List', to: '/syllabus/list' },
  //     ],
  //   },
  //   {
  //     segment: 'school',
  //     title: 'School',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'form', title: 'Student Form', to: '/school/form' },
  //       { segment: 'registration', title: 'Teacher Registration', to: '/school/registration' },
  //     ],
  //   },
  //   {
  //     segment: 'class',
  //     title: 'Class',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'form', title: 'Class Form', to: '/class/form' },
  //       { segment: 'registration', title: 'Class List', to: '/class/registration' },
  //     ],
  //   },
  //   {
  //     segment: 'fees',
  //     title: 'Fees',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'structure', title: 'Fees Structure', to: '/fees/structure' },
  //       { segment: 'voucher', title: 'Fees Voucher', to: '/fees/voucher' },
  //       { segment: 'submission', title: 'Fees Submission', to: '/fees/submission' },
  //     ],
  //   },
  //   {
  //     segment: 'admission',
  //     title: 'Admission',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'structure', title: 'Admission Structure', to: '/admission/structure' },
  //     ],
  //   },
  //   {
  //     segment: 'exam',
  //     title: 'Exam',
  //     icon: <EmailIcon />,
  //     children: [
  //       { segment: 'schedule', title: 'Exam Schedule', to: '/exam/schedule' },
  //       { segment: 'result', title: 'Exam Result', to: '/exam/result' },
  //     ],
  //   },
  // ];

  // export const demoTheme = extendTheme({
  //   colorSchemes: { light: true, dark: true },
  //   colorSchemeSelector: 'class',
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 600,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });


  import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';

// Navigation Menu
export const NAVIGATION = [
  {
    segment: 'students',
    title: 'Students',
    icon: <EmailIcon />,  // Fixed JSX
    children: [
      { segment: 'add', title: 'Student Registration', to: '/students/add' },
      { segment: 'list', title: 'Student List', to: '/students/list' },
    ],
  },
  {
    segment: 'teachers',
    title: 'Teachers',
    icon: <SchoolIcon />,  // Better Icon
    children: [
      { segment: 'add', title: 'Teacher Registration', to: '/teachers/add' },
      { segment: 'list', title: 'Teacher List', to: '/teachers/list' },
    ],
  },
  {
    segment: 'subjects',
    title: 'Subjects',
    icon: <BookIcon />,
    children: [
      { segment: 'add', title: 'Add Subject', to: '/subjects/add' },
      { segment: 'list', title: 'Subject List', to: '/subjects/list' },
    ],
  },
  {
    segment: 'syllabus',
    title: 'Syllabus',
    icon: <AssignmentIcon />,
    children: [
      { segment: 'add', title: 'Syllabus Form', to: '/syllabus/add' },
      { segment: 'list', title: 'Syllabus List', to: '/syllabus/list' },
    ],
  },
  {
    segment: 'school',
    title: 'School',
    icon: <SchoolIcon />,
    children: [
      { segment: 'form', title: 'Student Form', to: '/school/form' },
      { segment: 'registration', title: 'Teacher Registration', to: '/school/registration' },
    ],
  },
  {
    segment: 'class',
    title: 'Class',
    icon: <ClassIcon />,
    children: [
      { segment: 'form', title: 'Class Form', to: '/class/form' },
      { segment: 'registration', title: 'Class List', to: '/class/registration' },
    ],
  },
  {
    segment: 'fees',
    title: 'Fees',
    icon: <MoneyIcon />,
    children: [
      { segment: 'structure', title: 'Fees Structure', to: '/fees/structure' },
      { segment: 'voucher', title: 'Fees Voucher', to: '/fees/voucher' },
      { segment: 'submission', title: 'Fees Submission', to: '/fees/submission' },
    ],
  },
  {
    segment: 'admission',
    title: 'Admission',
    icon: <DashboardIcon />,
    children: [
      { segment: 'structure', title: 'Admission Structure', to: '/admission/structure' },
    ],
  },
  {
    segment: 'exam',
    title: 'Exam',
    icon: <BarChartIcon />,
    children: [
      { segment: 'schedule', title: 'Exam Schedule', to: '/exam/schedule' },
      { segment: 'result', title: 'Exam Result', to: '/exam/result' },
    ],
  },
];

// Theme Configuration
export const demoTheme = extendTheme({
  palette: {
    mode: 'light', // Change this to 'dark' if needed
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
