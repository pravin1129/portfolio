
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, ChevronRight, 
  Terminal, Briefcase, GraduationCap, Cpu, Layers, 
  Send, ExternalLink, Code2, Globe, Zap, Award
} from 'lucide-react';
import { RESUME_DATA } from './data';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-white p-4 md:p-8">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-6">
        {/* Header / Top Profile Card */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#16161a] border border-white/5 rounded-[2rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-2xl">
            <div className="relative group">
               <div className="w-32 h-32 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-5xl font-black shadow-xl shadow-indigo-500/20 group-hover:rotate-3 transition-transform">
                P
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-[#16161a] flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-4xl font-black text-white">{RESUME_DATA.name}</h1>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400">Available</span>
              </div>
              <p className="text-xl text-indigo-400 font-bold mb-4">{RESUME_DATA.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                {RESUME_DATA.summary.split('.')[0]}. Focused on <span className="text-white">scalable backend systems</span> and high-availability banking architecture.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href={`mailto:${RESUME_DATA.email}`} className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                  <Mail size={20} />
                </a>
                <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
                  Quick Contact
                </a>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 rounded-[2rem] p-8 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Zap size={120} />
            </div>
            <div>
              <p className="text-indigo-200 text-xs font-black uppercase tracking-widest mb-2">Core Impact</p>
              <h3 className="text-3xl font-black mb-4 leading-tight">10M+ Real-time Transactions</h3>
              <p className="text-indigo-100/80 text-sm font-medium">Optimized banking pipelines at Yes Bank using Java & Microservices.</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="text-xs font-bold bg-white/20 px-3 py-1.5 rounded-lg">High Performance</div>
              <Award size={24} />
            </div>
          </div>
        </header>

        {/* Main Dashboard Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Experience Mini-Timeline */}
          <div className="lg:col-span-2 bg-[#16161a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase size={20} className="text-indigo-500" /> Experience
              </h4>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Digital Snapshot</span>
            </div>
            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-indigo-500/20" />
                    {idx !== RESUME_DATA.experience.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="text-white font-bold group-hover:text-indigo-400 transition-colors">{exp.role}</h5>
                      <span className="text-[10px] font-bold text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-xs font-bold text-indigo-500/80 mb-2">{exp.company} {exp.client && `• ${exp.client}`}</p>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {exp.responsibilities[0]} {exp.responsibilities[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Ribbon */}
          <div className="bg-[#16161a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu size={20} className="text-indigo-500" /> Stack
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.flatMap(s => s.skills).slice(0, 15).map((skill, idx) => (
                <span key={idx} className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-indigo-600/20 transition-all cursor-default">
                  {skill}
                </span>
              ))}
              <div className="px-3 py-2 bg-indigo-600/10 text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-tighter">
                +15 More
              </div>
            </div>
          </div>

          {/* Quick Education & Certs */}
          <div className="bg-[#16161a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl flex flex-col">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap size={20} className="text-indigo-500" /> Credentials
              </h4>
            </div>
            <div className="space-y-4 flex-1">
              {RESUME_DATA.education.slice(0, 1).map((edu, idx) => (
                <div key={idx}>
                  <p className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-1">Latest Degree</p>
                  <p className="text-sm font-bold text-white leading-tight mb-1">{edu.degree}</p>
                  <p className="text-[11px] text-slate-500">{edu.institution}</p>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-white/5">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Certifications</p>
                <div className="flex flex-col gap-2">
                  {RESUME_DATA.certifications.slice(0, 2).map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="lg:col-span-3 bg-[#16161a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={20} className="text-indigo-500" /> Key Projects
              </h4>
              <button className="text-[10px] font-black text-indigo-500 uppercase tracking-widest hover:text-indigo-400 transition-colors">See Github</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESUME_DATA.projects.map((project, idx) => (
                <div key={idx} className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-600/10 text-indigo-400 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Code2 size={18} />
                    </div>
                    <ExternalLink size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">{project.title}</h5>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech?.slice(0, 3).map((t, tidx) => (
                      <span key={tidx} className="text-[9px] font-black uppercase text-slate-600">#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location / Status Widget */}
          <div className="bg-[#16161a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-indigo-500 mb-4 animate-pulse">
              <MapPin size={28} />
            </div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Based in</p>
            <p className="text-lg font-bold text-white">{RESUME_DATA.location}</p>
            <p className="text-[10px] text-slate-600 mt-2 italic">Open to hybrid / remote roles</p>
          </div>
        </main>

        {/* Short Footer */}
        <footer className="pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[12px]">P</div>
            <span>© {new Date().getFullYear()} Pravin Chavan Profile</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Source</a>
          </div>
        </footer>
      </div>

      {/* AI Assistant - Primary detailed interaction point */}
      <AIAssistant resume={RESUME_DATA} />
    </div>
  );
};

export default App;
