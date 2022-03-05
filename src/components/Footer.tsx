const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-5 bg-black text-slate-100">
      <p className="text-center">
        All Rights Reserved. TabhorProjects &reg; {new Date().getFullYear()}.
      </p>
    </footer>
  )
}

export default Footer
