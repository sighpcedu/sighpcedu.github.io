---
Title: ParaView on Frontier Tutorial
EventDate: 2024-08-29
EventTime: 13:00:00
TimeZone: America/New_York
category: event
Date: 2024-08-21T12:00:00-06:00
location: Virtual
Summary: ParaView is an open-source, multi-platform data analysis and visualization application that allows users to quickly build visualizations to analyze their data using qualitative and quantitative techniques. This tutorial covers using ParaView to process data at the Oak Ridge Leadership Computing Facility. Although the particulars of this tutorial focus on Frontier, the procedure is similar for other HPC systems. ParaView was designed to run on anything from laptops to supercomputers, so you can analyze small datasets all the way up to exascale datasets.
---

# ParaView on Frontier Tutorial

*Thursday, August 29, 2024 1:00-3:00 PM EST*

ParaView is an open-source, multi-platform data analysis and visualization application that allows users to quickly build visualizations to analyze their data using qualitative and quantitative techniques. The data exploration can be done interactively in 3D or programmatically using ParaView’s batch processing capabilities. ParaView was developed to analyze extremely large datasets using distributed memory computing resources. 

VTK-m, a visualization library designed for modern accelerators, provides highly parallel implementations of visualization algorithms that ParaView can use to accelerate its filters. VTK-m was enhanced with multi-node communication to scale rendering to the entirety of Frontier, and is instrumental in providing in situ visualization capability to multiple ECP simulation codes.

The Oak Ridge Leadership Computing Facility (OLCF) provides ParaView server installs on Andes, Summit, and Frontier to facilitate large scale distributed visualizations; however, Frontier GPUs are able to take most advantage of VTK-m acceleration.

# Workshop Details

This tutorial covers using ParaView to process data at the Oak Ridge Leadership Computing Facility. We focus on running ParaView on the Frontier HPC system. In this tutorial, we cover connecting an interactive session to Frontier, performing several visualization operations on data characteristic of that analyzed at OLCF, and setting up automated batch processing. We also discuss how to leverage the GPU processors on Frontier through ParaView’s use of VTK-m. Although the particulars of this tutorial focus on Frontier, the procedure is similar for other HPC systems. ParaView was designed to run on anything from laptops to supercomputers, so you can analyze small datasets all the way up to exascale datasets.

Registration information and post-event materials can be found here: [^1]

[https://www.olcf.ornl.gov/calendar/paraview-on-frontier/](https://www.olcf.ornl.gov/calendar/paraview-on-frontier/)

[^1]: All are welcome to register and attend. However, an active Frontier allocation is required to participate in the hands-on component.
