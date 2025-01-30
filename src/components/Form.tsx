import React from 'react';
import { Button } from 'primereact/button';

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: 'pi pi-facebook', url: '#', label: 'Facebook' },
        { icon: 'pi pi-linkedin', url: '#', label: 'LinkedIn' },
        { icon: 'pi pi-instagram', url: '#', label: 'Instagram' }
    ];

    return (
        <footer className="bg-blue-900 text-white p-4 mt-auto">
            <div className="container mx-auto">
                <div className="flex flex-column md:flex-row justify-content-between align-items-center gap-4">
                    {/* Association Info */}
                    <div className="flex flex-column gap-2">
                        <h3 className="text-xl font-bold m-0">Association des Jeunes Ingénieurs de Djerba</h3>
                        <p className="text-gray-100 m-0">Ensemble pour un avenir innovant</p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-column gap-2">
                        <h4 className="text-lg font-semibold m-0">Contactez-nous</h4>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-envelope" />
                            <a href="mailto:contact@ajid.tn" className="text-white hover:text-blue-200 no-underline">
                                contact@ajid.tn
                            </a>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-phone" />
                            <a href="tel:+21612345678" className="text-white hover:text-blue-200 no-underline">
                                +216 12 345 678
                            </a>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-column gap-2">
                        <h4 className="text-lg font-semibold m-0">Suivez-nous</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    icon={social.icon}
                                    rounded
                                    text
                                    severity="info"
                                    aria-label={social.label}
                                    className="text-white hover:text-blue-200"
                                    onClick={() => window.open(social.url, '_blank')}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4 text-gray-200 text-sm">
                    © {new Date().getFullYear()} AJID. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;