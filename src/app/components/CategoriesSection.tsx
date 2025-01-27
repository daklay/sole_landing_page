'use client';

import * as Icon from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { formsService, CategoryResponse } from '../services/forms';

interface Category {
  uuid: string;
  name: string;
  icon: string;
  description: string;
  ratingQuestion: string;
  commentQuestion: string;
}

const getIconComponent = (iconName: string): any => {
  // Convert hyphenated name to PascalCase and append 'Icon'
  const iconKey = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('') + 'Icon';
  
  return (Icon as any)[iconKey] || Icon.AcademicCapIcon;
};

export default function CategoriesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);
  const [additionalCategories, setAdditionalCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await formsService.getCategories();
        
        // Split categories into visible and additional
        const visibleCount = Math.min(6, allCategories.length);
        setVisibleCategories(allCategories.slice(0, visibleCount));
        setAdditionalCategories(allCategories.slice(visibleCount));
        setCategories(allCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <section id="categories" className="bg-gradient-to-b from-white via-primary/5 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <span className="text-primary font-medium mb-4">Survey Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
              Survey Categories
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
          </div>
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-medium text-gray-900 mt-1.5">{category.name}</h3>
                </div>
              </div>
            ))}
            <div 
              onClick={() => setIsOpen(true)}
              className="group bg-white/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-dashed border-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <EllipsisHorizontalCircleIcon className="w-6 h-6 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-medium text-gray-900 mt-1.5">More Categories</h3>
              </div>
            </div>
          </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCategories.map((category) => {
              const IconComponent = getIconComponent(category.icon);
              return (
                <div 
                  key={category.uuid}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {additionalCategories.length > 0 && (
              <div 
                onClick={() => setIsOpen(true)}
                className="group bg-white/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-dashed border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Icon.EllipsisHorizontalCircleIcon className="w-6 h-6 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-medium text-gray-900 mt-1.5">More Categories</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Additional Categories
                  </Dialog.Title>
                  <div className="grid gap-4">
                    {additionalCategories.map((category) => {
                      const IconComponent = getIconComponent(category.icon);
                      return (
                        <div 
                          key={category.uuid}
                          className="group bg-white p-4 rounded-lg border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{category.name}</h3>
                              <p className="text-sm text-gray-500">{category.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
